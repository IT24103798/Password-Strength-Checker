# 🔐 Password Strength Checker

A web-based cybersecurity application that analyzes password strength and provides security feedback to help users create stronger passwords.

This project was developed as part of **DecodeLabs Cyber Security Industrial Training – Project 1**.

## 📌 Project Overview

The Password Strength Checker evaluates a password based on several security requirements and classifies it as:

- 🔴 Weak
- 🟡 Medium
- 🟢 Strong

The application provides live strength feedback while the user types.

When the user clicks **Check Password**, the application displays a detailed analysis showing which password requirements have been satisfied and which areas need improvement.

## ✨ Features

- Real-time password strength analysis
- Weak, Medium, and Strong classification
- Color-coded password strength meter
- Password security score
- Minimum length validation
- Uppercase letter validation
- Lowercase letter validation
- Number validation
- Special character validation
- Common password detection
- Detailed password weakness identification
- Security recommendations
- Show/Hide password option
- Clear/Reset functionality
- Responsive web interface
- Client-side password analysis

## 🔍 Password Requirements

The application checks whether the password contains:

- At least 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character

Example:

Password:

MySecure@2026

Result:

Strength: STRONG 🟢
Score: 5/5

✓ At least 8 characters
✓ Uppercase letter
✓ Lowercase letter
✓ Number
✓ Special character

## ⚙️ How It Works

1. The user enters a password.
2. JavaScript analyzes the password while the user types.
3. The strength meter displays Weak, Medium, or Strong.
4. The user clicks the **Check Password** button.
5. The application performs the detailed password analysis.
6. The application displays:
   - Security score
   - Passed requirements
   - Failed requirements
   - Common password warning
   - Security recommendations

## 🛠️ Technologies Used

### HTML5
Used to create the structure and content of the web application.

### CSS3
Used to create the responsive cybersecurity-themed user interface and strength indicators.

### JavaScript
Used to implement password validation, strength calculation, common password detection, and security recommendations.

## 📂 Project Structure

Password-Strength-Checker/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── README.md

## 🔒 Privacy & Security

Password analysis is performed locally in the user's browser.

The application does not:

- Store entered passwords
- Send passwords to a server
- Save passwords in a database
- Log entered passwords

This reduces unnecessary exposure of sensitive password information.

## ⚠️ Common Password Detection

The application contains a small local list of commonly used passwords such as:

- password
- password123
- 123456
- qwerty
- admin123

If the entered password matches one of these values, the application warns the user.

> Note: This is an educational local common-password check. It does not check an actual leaked or breached-password database.

## 🚀 How to Run the Project

### Option 1 – Open Directly

1. Download or clone the project.
2. Open the project folder.
3. Open `index.html` in a web browser.

### Option 2 – VS Code Live Server

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. The application will open in your browser.

## 🧪 Example Test Cases

| Password | Expected Result |
|----------|-----------------|
| abc | Weak 🔴 |
| hello123 | Medium 🟡 |
| Hello123 | Medium 🟡 |
| Hello@123 | Strong 🟢 |
| password123 | Weak 🔴 + Common Password Warning |
| MySecure@2026 | Strong 🟢 |

## 🎯 Learning Outcomes

Through this project, I practiced:

- Cybersecurity fundamentals
- Password security concepts
- Input validation
- String and pattern checking
- Conditional logic
- JavaScript regular expressions
- Client-side security logic
- HTML and CSS web development
- User-focused security feedback

### Disclaimer

This project is intended for educational purposes. The strength result is based on predefined password rules and should not be considered a guarantee that a password is secure.
