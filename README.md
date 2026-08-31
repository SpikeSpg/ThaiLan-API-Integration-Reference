# ThaiLan API Integration Reference (Interactive Docs Portal)

A modern, fast, zero-dependency **Mintlify-style API Documentation & Developer Portal** for the **ThaiLan Enterprise API** (`api.nolimittopup.com`).

---

## ✨ Key Features

1. **Mintlify & Stripe-inspired 3-Column Aesthetic**:
   - High-contrast developer dark mode with emerald (`#10b981`) and indigo accents.
   - Sticky multi-language code panels on the right column.
   - Typography powered by *Inter* and *JetBrains Mono*.

2. **100% Bilingual Documentation (English & ภาษาไทย)**:
   - Instant 1-click language switch preserving all original descriptions, tables, and notes.

3. **Complete API Endpoint Coverage**:
   - 🔑 **API Key Management & Renewal** (`/api/BusinessApiLog/CreateApiKeyByThaiLan`)
   - 🎫 **1. Account Requests** (Provisioning, Get Detail, Refund, Money Transfer)
   - 💸 **2. Top Up FB Account** (Create Topup, Order Details, Receipt Statement)
   - 📊 **3. Check Balance** (Batch FB Ad Account Balance check, Get All Thai Ads)
   - 📃 **4. Customer Statement / Receipts**
   - 💰 **5. Business Money & Balances** (USD / VND Wallet & Debt check)
   - 💳 **6. Payment Order / Debt API** (Multipart form-data debt submissions)
   - 🏦 **7. Loans API** (Credit line requests & approvals)
   - ↔️ **8. Remittance & Transfer API** (Multi-stage transfer tracking & histories)
   - 🔄 **9. API Callback Webhook Engine** (Inbound webhook payload schemas & response format)

4. **Multi-Language Code Snippets**:
   - Instant copy-ready snippets in **cURL**, **Python (`requests`)**, **Node.js (`axios`)**, and **TypeScript SDK**.

5. **Interactive Developer Tools**:
   - **Interactive API Playground**: Test request parameters and inspect JSON responses directly from the browser.
   - **Instant Search (`Ctrl + K`)**: Fuzzy search across endpoints, paths, descriptions, and categories.
   - **1-Click Copy**: Copy endpoints, cURL commands, and JSON structures effortlessly.

---

## 🚀 How to Run Locally

### Option 1: Double-Click / Direct File
Open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Live Server / Local Web Server
You can launch using any local web server:

```powershell
# Using Python:
python -m http.server 3000

# Or using npx (Node.js):
npx serve .
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
d:\Programming\ThaiLan API Integration Reference/
├── index.html              # Main Mintlify-style HTML app layout
├── css/
│   ├── style.css           # Layouts, navigation, responsive styles
│   ├── code.css            # Syntax highlighting & snippet tabs
│   └── components.css      # Tables, badges, alerts, modals & playground
├── js/
│   ├── api-data.js         # Complete structured API dataset (EN + TH)
│   ├── app.js              # Dynamic renderer, search & scroll-spy
│   └── playground.js       # Interactive API tester modal
└── README.md               # Quick start documentation
```
