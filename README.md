# InsureMeNow

### An Intelligent Insurance App for the Illinois Market

---

## **Overview**

**InsureNow** is a user-friendly application designed to simplify the process of comparing, purchasing, and managing insurance policies tailored to your needs. Leveraging AI-powered recommendations, seamless API integrations, and a secure digital ecosystem, InsureNow provides an efficient and transparent insurance experience.

---

## **Features**

1. **Insurance Types Offered**
    - Life Insurance
    - Health Insurance
    - Motor Insurance (Two-wheeler, Four-wheeler, Commercial vehicles)
    - Gender Insurance
    - Marine Insurance
    - Export/Trade Insurance
    - Travel Insurance
    - Home Insurance
    - Term Insurance
    - Critical Illness Insurance

2. **User Input Form**
    - Collects personal details, health information, and insurance preferences.
    - Vehicle/property details for specific policies.

3. **Comparison Engine**
    - AI-driven matching algorithm.
    - Policy recommendations based on premium, coverage, claim settlement ratio, and reviews.

4. **Instant Quotes**
    - Real-time premium rates.
    - Direct links for policy purchases or in-app transactions.

5. **AI Integration**
    - Personalized policy recommendations.
    - 24/7 chatbot assistance.

6. **User Dashboard**
    - Displays purchased policies and tracks renewal dates and claims.

7. **Payment Gateway**
    - Secure payments through UPI, net banking, credit/debit cards, or wallets.

8. **Claim Assistance**
    - Step-by-step guidance for the claims process.

9. **Document Storage**
    - Store digital copies of policies securely in the app.

---

## **Tech Stack**

### **Frontend**
- **Framework**: React Native / Flutter
- **UI/UX**: Designed for simplicity and usability.

### **Backend**
- **Languages**: Python (Django/Flask) or Node.js
- **AI Integration**: OpenAI API, TensorFlow, PyTorch

### **Database**
- **SQL**: PostgreSQL/MySQL
- **NoSQL**: MongoDB for quick retrieval

### **APIs**
- Insurance Aggregator APIs: Policybazaar, Coverfox, and others.
- AI & Machine Learning APIs for advanced recommendations.

### **Security**
- AES-256 Encryption
- HTTPS and OAuth 2.0 for secure communication.

---

## **Installation**

### Prerequisites
- **Node.js**: Ensure Node.js is installed for the development environment.
- **Python**: If using the Django/Flask backend.
- **Database**: Install PostgreSQL/MySQL.

### Steps to Set Up

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/InsureNow.git
    cd InsureNow
    ```

2. Install dependencies:
    - For Backend:
        ```bash
        pip install -r requirements.txt
        ```
    - For Frontend:
        ```bash
        npm install
        ```

3. Configure environment variables:
    - Create `.env` files in the backend and frontend directories.
    - Set database credentials, API keys, and other configurations.

4. Run the app:
    - Backend:
        ```bash
        python manage.py runserver
        ```
    - Frontend:
        ```bash
        npm start
        ```

---

## **Project Structure**

```
InsureNow/
├── backend/
│   ├── app/
│   ├── requirements.txt
│   └── ...
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
└── README.md
```

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## **Contributors**

- [Your Name](https://github.com/your-username)
- [Contributors List]

---

## **Contact**

For any inquiries or feedback, reach out at: **your-email@example.com**.
