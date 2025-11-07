// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, onSnapshot, setDoc, updateDoc, increment, writeBatch } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { setLogLevel } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js';

// Firebase Initialization
setLogLevel('debug');
const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let userId = null;
let userDocRef = null;
let currentCoins = 0;

const coinsCountEl = document.getElementById('coins-count');

onAuthStateChanged(auth, async (user) => {
    if (user) {
        userId = user.uid;
        userDocRef = doc(db, 'artifacts', appId, 'users', userId, 'userData', 'coins');
        console.log("User logged in with ID:", userId);

        onSnapshot(userDocRef, (docSnap) => {
            if (docSnap.exists()) {
                currentCoins = docSnap.data().value || 0;
                if (coinsCountEl) {
                    coinsCountEl.textContent = currentCoins.toLocaleString('en-US');
                }
            } else {
                setDoc(userDocRef, { value: 0 });
                currentCoins = 0;
                if (coinsCountEl) {
                    coinsCountEl.textContent = '0';
                }
            }
        }, (error) => {
            console.error("Error listening to coins document:", error);
        });

        if (window.location.pathname.endsWith('profile.html')) {
            const profileReportsEl = document.getElementById('profile-reports');
            const profileWasteEl = document.getElementById('profile-waste');
            const profileCO2El = document.getElementById('profile-co2');
            const userImpactDocRef = doc(db, 'artifacts', appId, 'users', userId, 'userData', 'impact');
            onSnapshot(userImpactDocRef, (docSnap) => {
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    if (profileReportsEl && profileWasteEl && profileCO2El) {
                        profileReportsEl.textContent = (data.reports || 0).toLocaleString();
                        profileWasteEl.textContent = (data.waste || 0).toLocaleString();
                        profileCO2El.textContent = (data.co2 || 0).toLocaleString();
                    }
                } else {
                    setDoc(userImpactDocRef, { reports: 0, waste: 0, co2: 0 });
                    if (profileReportsEl && profileWasteEl && profileCO2El) {
                        profileReportsEl.textContent = '0';
                        profileWasteEl.textContent = '0';
                        profileCO2El.textContent = '0';
                    }
                }
            }, (error) => {
                console.error("Error listening to impact document:", error);
            });
        }

    } else {
        console.log("No user signed in. Signing in anonymously...");
        try {
            if (typeof __initial_auth_token !== 'undefined') {
                await signInWithCustomToken(auth, __initial_auth_token);
            } else {
                await signInAnonymously(auth);
            }
        } catch (error) {
            console.error("Firebase Auth error:", error);
        }
    }
});

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

const isIndexPage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
const isImpactPage = window.location.pathname.endsWith('impact.html');

if (isIndexPage) {
    const wasteReportForm = document.getElementById('waste-report-form');
    const feedbackModal = document.getElementById('feedback-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const modalSpinner = document.getElementById('modal-spinner');
    const modalCloseButton = document.getElementById('modal-close-button');
    const wasteTypes = [
        { type: 'Recyclables', vehicle: 'Recycling Truck' },
        { type: 'Mixed Waste', vehicle: 'Standard Garbage Truck' },
        { type: 'Hazardous Materials', vehicle: 'Specialized Hazmat Vehicle' },
        { type: 'Construction Debris', vehicle: 'Heavy-Duty Dump Truck' },
        { type: 'Yard Waste', vehicle: 'Dedicated Yard Waste Truck' }
    ];

    if (wasteReportForm) {
        wasteReportForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!userDocRef) {
                console.error("Firestore not ready yet. Please wait.");
                return;
            }
            modalTitle.textContent = 'Processing Your Report...';
            modalMessage.textContent = 'Our AI is analyzing the waste to determine the best course of action.';
            modalSpinner.classList.remove('hidden');
            modalCloseButton.classList.add('hidden');
            feedbackModal.classList.remove('hidden');

            const coinsEarned = Math.floor(Math.random() * 11) + 5;
            const wasteDiverted = Math.floor(Math.random() * 10) + 1;
            const co2Saved = Math.floor(Math.random() * 5) + 1;
            
            try {
                const batch = writeBatch(db);
                batch.update(userDocRef, { value: increment(coinsEarned) });
                const userImpactDocRef = doc(db, 'artifacts', appId, 'users', userId, 'userData', 'impact');
                batch.update(userImpactDocRef, { reports: increment(1), waste: increment(wasteDiverted), co2: increment(co2Saved) });
                await batch.commit();

                const randomWaste = wasteTypes[Math.floor(Math.random() * wasteTypes.length)];
                modalTitle.textContent = 'Report Submitted!';
                modalMessage.innerHTML = `<p class="mb-2">Thank you for helping us keep our city clean. You've earned <span class="font-bold text-yellow-500">${coinsEarned} coins</span>!</p><p class="mb-2">Based on our analysis, we've identified the waste as: <span class="font-bold text-green-600">${randomWaste.type}</span>.</p><p>A <span class="font-bold text-green-600">${randomWaste.vehicle}</span> has been dispatched to your location.</p>`;
                modalSpinner.classList.add('hidden');
                modalCloseButton.classList.remove('hidden');
                wasteReportForm.reset();
            } catch (error) {
                console.error("Error updating coins or submitting report:", error);
                modalTitle.textContent = 'Submission Failed!';
                modalMessage.textContent = 'There was an error submitting your report. Please try again.';
                modalSpinner.classList.add('hidden');
                modalCloseButton.classList.remove('hidden');
            }
        });

        document.querySelectorAll('.open-reward-btn').forEach(button => {
            button.addEventListener('click', async (e) => {
                const cost = parseInt(e.target.dataset.cost);
                const reward = e.target.dataset.reward;
                if (!userDocRef) {
                    console.error("Firestore not ready yet. Please wait.");
                    return;
                }
                modalTitle.textContent = 'Opening Reward...';
                modalMessage.textContent = 'Checking your coin balance...';
                modalSpinner.classList.remove('hidden');
                modalCloseButton.classList.add('hidden');
                feedbackModal.classList.remove('hidden');
                if (currentCoins >= cost) {
                    try {
                        await updateDoc(userDocRef, { value: increment(-cost) });
                        modalTitle.textContent = 'Reward Unlocked!';
                        modalMessage.textContent = reward;
                        modalSpinner.classList.add('hidden');
                        modalCloseButton.classList.remove('hidden');
                    } catch (error) {
                        console.error("Error updating coins:", error);
                        modalTitle.textContent = 'Error!';
                        modalMessage.textContent = 'Something went wrong. Please try again.';
                        modalSpinner.classList.add('hidden');
                        modalCloseButton.classList.remove('hidden');
                    }
                } else {
                    modalTitle.textContent = 'Not Enough Coins!';
                    modalMessage.textContent = `You need ${cost - currentCoins} more coins to open this reward.`;
                    modalSpinner.classList.add('hidden');
                    modalCloseButton.classList.remove('hidden');
                }
            });
        });

        if(modalCloseButton) {
            modalCloseButton.addEventListener('click', () => {
                feedbackModal.classList.add('hidden');
            });
        }
    }
}

if (isImpactPage) {
    const counters = document.querySelectorAll('.counter');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                let count = 0;
                const duration = 2000;
                const step = Math.ceil(target / (duration / 16));

                const timer = setInterval(() => {
                    count += step;
                    if (count >= target) {
                        count = target;
                        clearInterval(timer);
                    }
                    counter.textContent = count.toLocaleString('en-US');
                }, 16);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}