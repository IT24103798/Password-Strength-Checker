// ========================================
// GET HTML ELEMENTS
// ========================================

const passwordInput =
    document.getElementById("password");

const togglePasswordButton =
    document.getElementById("togglePassword");

const checkButton =
    document.getElementById("checkButton");

const clearButton =
    document.getElementById("clearButton");

const strengthText =
    document.getElementById("strengthText");

const strengthFill =
    document.getElementById("strengthFill");

const scoreText =
    document.getElementById("scoreText");

const suggestionText =
    document.getElementById("suggestionText");

const warningBox =
    document.getElementById("warningBox");

const warningText =
    document.getElementById("warningText");

const requirementsCard =
    document.querySelector(".requirements-card");

const tipCard =
    document.querySelector(".tip-card");

const scoreContainer =
    document.querySelector(".score-container");


// ========================================
// COMMON PASSWORDS
// ========================================

const commonPasswords = [
    "123456",
    "12345678",
    "123456789",
    "password",
    "password1",
    "password123",
    "qwerty",
    "qwerty123",
    "admin",
    "admin123",
    "letmein",
    "welcome",
    "abc123",
    "iloveyou"
];


// ========================================
// ANALYZE PASSWORD
// ========================================

function analyzePassword(password) {

    return {

        length:
            password.length >= 8,

        uppercase:
            /[A-Z]/.test(password),

        lowercase:
            /[a-z]/.test(password),

        number:
            /\d/.test(password),

        symbol:
            /[^A-Za-z0-9]/.test(password)

    };
}


// ========================================
// CALCULATE SCORE
// ========================================

function calculateScore(checks) {

    return Object.values(checks)
        .filter(Boolean)
        .length;
}


// ========================================
// DISPLAY STRENGTH
// ========================================

function displayStrength(
    strength,
    percentage,
    color
) {

    strengthText.textContent = strength;

    strengthText.style.color = color;

    strengthFill.style.width =
        percentage + "%";

    strengthFill.style.background =
        color;
}


// ========================================
// LIVE STRENGTH
// Runs automatically while typing
// ========================================

function updateLiveStrength() {

    const password =
        passwordInput.value;


    // Hide detailed analysis again
    // whenever user changes password

    hideDetails();


    if (password.length === 0) {

        strengthText.textContent =
            "Not Checked";

        strengthText.style.color =
            "#94a3b8";

        strengthFill.style.width =
            "0%";

        return;
    }


    const checks =
        analyzePassword(password);


    const score =
        calculateScore(checks);


    const isCommon =
        commonPasswords.includes(
            password.toLowerCase()
        );


    // Common password

    if (isCommon) {

        displayStrength(
            "WEAK",
            25,
            "#ef4444"
        );

        return;
    }


    // Weak

    if (score <= 2) {

        displayStrength(
            "WEAK",
            30,
            "#ef4444"
        );
    }


    // Medium

    else if (score <= 4) {

        displayStrength(
            "MEDIUM",
            65,
            "#f59e0b"
        );
    }


    // Strong

    else {

        displayStrength(
            "STRONG",
            100,
            "#22c55e"
        );
    }
}


// ========================================
// UPDATE REQUIREMENT
// ========================================

function updateRequirement(
    elementId,
    passed
) {

    const requirement =
        document.getElementById(elementId);

    const icon =
        requirement.querySelector(
            ".status-icon"
        );


    if (passed) {

        requirement.classList.add(
            "valid"
        );

        icon.textContent = "✓";

    }

    else {

        requirement.classList.remove(
            "valid"
        );

        icon.textContent = "✕";
    }
}


// ========================================
// SECURITY SUGGESTION
// ========================================

function createSuggestion(
    checks,
    isCommon
) {

    if (isCommon) {

        return "Avoid commonly used passwords. Create a unique password.";
    }


    if (!checks.length) {

        return "Use at least 8 characters.";
    }


    if (!checks.uppercase) {

        return "Add an uppercase letter such as A, B or C.";
    }


    if (!checks.lowercase) {

        return "Add at least one lowercase letter.";
    }


    if (!checks.number) {

        return "Add at least one number such as 1, 2 or 3.";
    }


    if (!checks.symbol) {

        return "Add a special character such as @, #, ! or $.";
    }


    return "Great! Your password meets all the requirements.";
}


// ========================================
// FULL CHECK
// Runs ONLY after clicking button
// ========================================

function checkPassword() {

    const password =
        passwordInput.value;


    if (password.length === 0) {

        alert(
            "Please enter a password first."
        );

        passwordInput.focus();

        return;
    }


    const checks =
        analyzePassword(password);


    const score =
        calculateScore(checks);


    const isCommon =
        commonPasswords.includes(
            password.toLowerCase()
        );


    // Update score

    scoreText.textContent =
        `${score} / 5`;


    // Update requirements

    updateRequirement(
        "lengthRequirement",
        checks.length
    );

    updateRequirement(
        "uppercaseRequirement",
        checks.uppercase
    );

    updateRequirement(
        "lowercaseRequirement",
        checks.lowercase
    );

    updateRequirement(
        "numberRequirement",
        checks.number
    );

    updateRequirement(
        "symbolRequirement",
        checks.symbol
    );


    // Common password warning

    if (isCommon) {

        warningText.textContent =
            "This password is in the application's local common-password list.";

        warningBox.classList.remove(
            "hidden"
        );

    }

    else {

        warningBox.classList.add(
            "hidden"
        );
    }


    // Recommendation

    suggestionText.textContent =
        createSuggestion(
            checks,
            isCommon
        );


    // Show detailed information

    showDetails();
}


// ========================================
// HIDE DETAILS
// ========================================

function hideDetails() {

    requirementsCard.classList.add(
        "hidden"
    );

    tipCard.classList.add(
        "hidden"
    );

    scoreContainer.classList.add(
        "hidden"
    );

    warningBox.classList.add(
        "hidden"
    );
}


// ========================================
// SHOW DETAILS
// ========================================

function showDetails() {

    requirementsCard.classList.remove(
        "hidden"
    );

    tipCard.classList.remove(
        "hidden"
    );

    scoreContainer.classList.remove(
        "hidden"
    );
}


// ========================================
// SHOW / HIDE PASSWORD
// ========================================

togglePasswordButton.addEventListener(
    "click",
    function () {

        if (
            passwordInput.type ===
            "password"
        ) {

            passwordInput.type = "text";

            togglePasswordButton.textContent =
                "🙈";

        }

        else {

            passwordInput.type =
                "password";

            togglePasswordButton.textContent =
                "👁";
        }
    }
);


// ========================================
// LIVE CHECK WHILE TYPING
// ========================================

passwordInput.addEventListener(
    "input",
    updateLiveStrength
);


// ========================================
// CHECK BUTTON
// ========================================

checkButton.addEventListener(
    "click",
    checkPassword
);


// ========================================
// ENTER KEY
// ========================================

passwordInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            checkPassword();
        }
    }
);


// ========================================
// CLEAR BUTTON
// ========================================

clearButton.addEventListener(
    "click",
    function () {

        passwordInput.value = "";

        passwordInput.type =
            "password";

        togglePasswordButton.textContent =
            "👁";

        strengthText.textContent =
            "Not Checked";

        strengthText.style.color =
            "#94a3b8";

        strengthFill.style.width =
            "0%";

        hideDetails();

        passwordInput.focus();
    }
);


// ========================================
// INITIAL STATE
// ========================================

hideDetails();