/**
 * ThaiLan API Integration Reference - Complete Standalone App Bundle
 * Zero-dependency: works directly via file:/// and http://
 */

(function () {
  'use strict';

  // --- API DATASET ---
  const API_METADATA = {
    title: "ThaiLan API Reference",
    subtitle: "Enterprise Facebook Advertising Account Management, Top-ups, Balances & Transfers",
    version: "v2.0",
    baseUrl: "https://api.nolimittopup.com",
    defaultHeader: "API_KEY",
    authNote: {
      en: "All requests require the API_KEY header and IP Whitelisting licensing.",
      th: "ทุกคำขอจำเป็นต้องระบุ Header API_KEY และเซิร์ฟเวอร์ต้องผ่านการลงทะเบียน IP Whitelisting"
    }
  };

  const API_SECTIONS = [
    {
      id: "getting-started",
      icon: "zap",
      title: { en: "Getting Started", th: "เริ่มต้นใช้งาน" },
      description: {
        en: "Essential requirements, IP whitelisting, authentication header setup, and system architecture.",
        th: "ข้อกำหนดเบื้องต้น การอนุญาต IP และการตั้งค่า Header การยืนยันตัวตน"
      },
      items: [
        {
          id: "overview",
          title: { en: "Requirements to connect to the API", th: "ข้อกำหนดในการเชื่อมต่อ API" },
          type: "guide",
          content: {
            en: `
# Requirements to be able to connect to the API
- We will provide you an Api key, you need to load the Api key with the name API_KEY into the header before calling our Api.
- You need to provide us with your server's IP address so we can do the licensing for that IP address to call our API

#### ● Note
  - API_KEY will be valid for 2 months. When API_KEY expires, you cannot call our API.
  - When API_KEY expires you need to call Api to get new Api_Key

---

# List of requirement
1. 🎫 **Account**
2. 💸 **Top Up FB Account**
3. 📊 **Check Balance (FB API or Manual Input)**
4. 📃 **Customer Statement / Receipt**
5. 🔔 **Balance Alert System**
            `,
            th: `
# ข้อกำหนดในการเชื่อมต่อ API
- เราจะมอบคีย์ API ให้แก่คุณ โดยคุณจะต้องโหลดคีย์ API ที่มีชื่อ API_KEY เข้าไปในส่วนหัว (Header) ก่อนเรียกใช้ API ของเรา
- คุณจำเป็นต้องแจ้งที่อยู่ IP ของเซิร์ฟเวอร์ของคุณให้เราทราบ เพื่อที่เราจะดำเนินการออกใบอนุญาต (Licensing) สำหรับที่อยู่ IP นั้นในการเรียกใช้ API ของเรา

#### ● หมายเหตุ
  - API_KEY จะมีอายุ 2 เดือน เมื่อ API_KEY หมดอายุคุณจะไม่สามารถเรียกใช้ API ของเราได้
  - เมื่อ API_KEY หมดอายุคุณจะต้องเรียกใช้ API เพื่อรับ API_Key ใหม่

---

# รายการข้อกำหนด (List of requirement)
1. 🎫 **Account (บัญชี)**
2. 💸 **Top Up FB Account (เติมเงิน บัญชี FB)**
3. 📊 **Check Balance (FB API or Manual Input) (ตรวจสอบยอดคงเหลือ)**
4. 📃 **Customer Statement / Receipt (ใบแจ้งยอด/ใบเสร็จรับเงินของลูกค้า)**
5. 🔔 **Balance Alert System (ระบบแจ้งเตือนยอดคงเหลือ)**
            `
          }
        },
        {
          id: "create-api-key",
          title: { en: "APi to get new API_KEY", th: "API เพื่อรับ API_KEY ใหม่" },
          method: "POST",
          path: "/api/BusinessApiLog/CreateApiKeyByThaiLan",
          type: "endpoint",
          category: "auth",
          summary: {
            en: "This is a POST request to create an API key using the Thai Lan method. The purpose of this request is to generate a new API key based on the provided old key.",
            th: "นี่คือคำขอแบบ POST เพื่อสร้างคีย์ API โดยใช้วิธีการของ Thai Lan จุดประสงค์ของคำขอนี้คือเพื่อสร้างคีย์ API ใหม่จากคีย์เก่าที่ให้มา"
          },
          description: {
            en: "This is a POST request to create an API key using the Thai Lan method. The purpose of this request is to generate a new API key based on the provided old key.",
            th: "นี่คือคำขอแบบ POST เพื่อสร้างคีย์ API โดยใช้วิธีการของ Thai Lan จุดประสงค์ของคำขอนี้คือเพื่อสร้างคีย์ API ใหม่จากคีย์เก่าที่ให้มา"
          },
          queryParams: [
            {
              name: "KeyOld",
              type: "string",
              required: true,
              description: {
                en: "The old API key that is being used to generate the new API key. This parameter is included in the query string of the URL.",
                th: "คีย์ API เก่าที่ใช้ในการสร้างคีย์ API ใหม่ พารามิเตอร์นี้จะรวมอยู่ในสตริงคำค้นหา (query string) ของ URL"
              },
              example: "e86dacd7-5e90-46df-ac37-a8d3b86cabd7"
            }
          ],
          headers: [
            { name: "API_KEY", value: "{{YOUR_CURRENT_API_KEY}}", required: true }
          ],
          responseStatus: 200,
          responseSchema: {
            success: "boolean: Indicates whether the API key creation was successful.",
            data: "string: This field may contain additional information about the created API key."
          },
          responseExample: {
            success: true,
            data: "e86dacd7-5e90-46df-ac37-a8d3b86cabd7"
          },
          notes: {
            en: "● You can only access this Api when the API_KEY is about to expire. Specifically 1 day before and 1 day after expiration.\n● If it's been more than 1 day since the API_KEY expired, you will not be able to create a new API_KEY. At this time, you can only contact us again to get a new API_KEY.",
            th: "● คุณสามารถเข้าถึง API นี้ได้เมื่อ API_KEY ใกล้จะหมดอายุเท่านั้น โดยเฉพาะ 1 วันก่อนและ 1 วันหลังการหมดอายุ\n● หากเกิน 1 วันนับตั้งแต่ API_KEY หมดอายุ คุณจะไม่สามารถสร้าง API_KEY ใหม่ได้ ในเวลานี้คุณจะต้องติดต่อเราอีกครั้งเพื่อรับ API_KEY ใหม่"
          }
        }
      ]
    },
    {
      id: "account-management",
      icon: "ticket",
      title: { en: "I. API Account Request (🎫 Account)", th: "I. API คำขอบัญชี (🎫 Account)" },
      description: {
        en: "Provision new Facebook ad accounts, view ticket statuses, request refunds, and transfer funds between accounts.",
        th: "ขอสร้างบัญชีโฆษณา Facebook ตรวจสอบสถานะตั๋วคำขอ ขอคืนเงิน และโอนย้ายเงินระหว่างบัญชี"
      },
      items: [
        {
          id: "request-account",
          title: { en: "1. Create Account request", th: "1. คำขอสร้างบัญชี (Create Account request)" },
          method: "POST",
          path: "/api/ThaiLan/CustomerTicketByThaiLan/request-account",
          type: "endpoint",
          category: "account",
          summary: {
            en: "This endpoint allows clients to request an account in the ThaiLan service. It is a POST operation that requires specific parameters to be included in the request body.",
            th: "Endpoint นี้อนุญาตให้ไคลเอนต์ร้องขอการสร้างบัญชีในบริการ ThaiLan เป็นการดำเนินการแบบ POST ที่ต้องใช้พารามิเตอร์เฉพาะในเนื้อหาคำขอ (request body)"
          },
          headers: [{ name: "API_KEY", value: "{{API_KEY}}", required: true }],
          bodyParams: [
            { name: "bmId", type: "text", required: true, description: { en: "Business Manager ID", th: "ID ของ Business Manager" }, example: "123456789012345" },
            { name: "currency", type: "text", required: true, description: { en: "Ad account currency (e.g., USD, THB)", th: "สกุลเงินของบัญชีโฆษณา เช่น USD, THB" }, example: "USD" },
            { name: "timezone", type: "text", required: true, description: { en: "Timezone identifier (e.g., Asia/Bangkok)", th: "โซนเวลาของบัญชีโฆษณา เช่น Asia/Bangkok" }, example: "Asia/Bangkok" },
            { name: "quantity", type: "long", required: true, description: { en: "Quantity requested", th: "จำนวนบัญชีที่ต้องการสร้าง" }, example: 1 },
            { name: "accountId", type: "text", required: false, description: { en: "Optional account ID", th: "ID บัญชี (ไม่จำเป็น)" }, example: "ACC-9921" },
            { name: "callbackUrl", type: "text", required: false, description: { en: "Optional callback notification URL", th: "URL สำหรับรับการแจ้งเตือนแบบ Callback" }, example: "https://your-domain.com/ticket-callback" }
          ],
          bodyExample: {
            bmId: "123456789012345",
            currency: "USD",
            timezone: "Asia/Bangkok",
            quantity: 1,
            accountId: "ACC-9921",
            callbackUrl: "https://your-domain.com/ticket-callback"
          },
          responseStatus: 200,
          responseExample: {
            success: true,
            data: {
              createdAt: 1719157200,
              requestType: "Provide Ad account",
              quantity: 1,
              currency: "USD",
              timezone: "Asia/Bangkok",
              status: "Pending",
              reasonForRefusal: null,
              idBm: "123456789012345",
              accountId: "ACC-9921",
              id: 10021
            }
          }
        },
        {
          id: "get-detail-account",
          title: { en: "2. GetDetail Request", th: "2. คำขอรับรายละเอียด (GetDetail Request)" },
          method: "GET",
          path: "/api/ThaiLan/CustomerTicketByThaiLan/getdetail/{id}",
          type: "endpoint",
          category: "account",
          summary: {
            en: "This endpoint retrieves the details of a specific customer ticket from the ThaiLan service. It is a read-only operation that allows clients to access detailed information about a particular ticket identified by its ID.",
            th: "Endpoint นี้ดึงรายละเอียดของตั๋วลูกค้าเฉพาะจากบริการ ThaiLan เป็นการดำเนินการแบบอ่านอย่างเดียว (read-only) ที่อนุญาตให้ไคลเอนต์เข้าถึงข้อมูลรายละเอียดเกี่ยวกับตั๋วเฉพาะที่ระบุด้วย ID"
          },
          headers: [{ name: "API_KEY", value: "{{API_KEY}}", required: true }],
          pathParams: [
            { name: "id", type: "long", required: true, description: { en: "The unique identifier for the customer ticket you wish to retrieve details for.", th: "ตัวระบุเฉพาะสำหรับตั๋วลูกค้าที่คุณต้องการดึงรายละเอียด" }, example: 10021 }
          ],
          responseStatus: 200,
          responseExample: {
            success: true,
            data: {
              createdAt: 1719157200,
              requestType: "Provide Ad account",
              quantity: 1,
              currency: "USD",
              timezone: "Asia/Bangkok",
              status: "Success",
              reasonForRefusal: null,
              idBm: "123456789012345",
              accountId: "1673715149385",
              id: 10021
            }
          },
          notes: {
            en: "- Ensure that the id parameter is valid and corresponds to an existing customer ticket to receive a successful response.\n- If the ticket does not exist or an error occurs, the response may indicate failure with appropriate error details.",
            th: "- ตรวจสอบให้แน่ใจว่าพารามิเตอร์ id ถูกต้องและสอดคล้องกับตั๋วลูกค้าที่มีอยู่จริงเพื่อรับการตอบกลับที่สำเร็จ\n- หากตั๋วไม่มีอยู่จริงหรือเกิดข้อผิดพลาด การตอบกลับอาจระบุความล้มเหลวพร้อมรายละเอียดข้อผิดพลาดที่เหมาะสม"
          }
        },
        {
          id: "refund-request",
          title: { en: "3. Request a refund", th: "3. คำขอคืนเงิน (Request a refund)" },
          method: "POST",
          path: "/api/ThaiLan/CustomerTicketByThaiLan/refund-request",
          type: "endpoint",
          category: "account",
          summary: {
            en: "This endpoint allows a customer to create a refund request for an account in the ThaiLand service. This is a POST operation that requires specific parameters to be included in the request body.",
            th: "Endpoint นี้อนุญาตให้ลูกค้าสร้างคำขอคืนเงินสำหรับบัญชีในบริการ ThaiLand เป็นการดำเนินการแบบ POST ที่ต้องใช้พารามิเตอร์เฉพาะในเนื้อหาคำขอ (request body)"
          },
          headers: [{ name: "API_KEY", value: "{{API_KEY}}", required: true }],
          bodyParams: [
            { name: "adId", type: "long", required: true, description: { en: "Ad account ID", th: "ID ของบัญชีโฆษณา" }, example: 20 },
            { name: "callbackUrl", type: "text", required: false, description: { en: "Optional callback URL", th: "URL สำหรับรับ Callback (ไม่จำเป็น)" }, example: "https://your-domain.com/ticket-callback" }
          ],
          bodyExample: {
            adId: 20,
            callbackUrl: "https://your-domain.com/ticket-callback"
          },
          responseStatus: 200,
          responseExample: {
            success: true,
            data: {
              createdAt: 1719160000,
              requestType: "Return and refund money Ad account",
              quantity: 0,
              currency: "USD",
              timezone: "Asia/Bangkok",
              status: "Pending",
              reasonForRefusal: null,
              idBm: "123456789012345",
              accountId: "1673715149385",
              id: 10025
            }
          }
        },
        {
          id: "request-money-transfer",
          title: { en: "4. Request money transfer", th: "4. คำขอโอนเงิน (Request money transfer)" },
          method: "POST",
          path: "/api/ThaiLan/CustomerTicketByThaiLan/request-money",
          type: "endpoint",
          category: "account",
          summary: {
            en: "This endpoint allows the customer to create a request to transfer money from one account to another within the ThaiLand service. This is a POST operation that requires specific parameters to be included in the request body. Note that the account that initiates the transfer will be revoked when the request is granted.",
            th: "Endpoint นี้อนุญาตให้ลูกค้าสร้างคำขอโอนเงินจากบัญชีหนึ่งไปยังอีกบัญชีหนึ่งภายในบริการ ThaiLand เป็นการดำเนินการแบบ POST ที่ต้องใช้พารามิเตอร์เฉพาะในเนื้อหาคำขอ (request body) โปรดทราบว่าบัญชีที่ริเริ่มการโอนจะถูกเพิกถอน (revoked) เมื่อคำขอได้รับการอนุมัติ"
          },
          headers: [{ name: "API_KEY", value: "{{API_KEY}}", required: true }],
          bodyParams: [
            { name: "oldAd", type: "long", required: true, description: { en: "Source Ad ID (will be revoked)", th: "ID บัญชีโฆษณาต้นทาง (จะถูกเพิกถอน)" }, example: 1001 },
            { name: "newAd", type: "long", required: true, description: { en: "Destination Ad ID", th: "ID บัญชีโฆษณาปลายทาง" }, example: 1002 },
            { name: "accountIdThai", type: "text", required: false, description: { en: "Optional Thai Account ID", th: "ID ของบัญชี (ไม่จำเป็น)" }, example: "TH-8812" },
            { name: "callbackUrl", type: "text", required: false, description: { en: "Optional callback URL", th: "URL สำหรับรับ Callback (ไม่จำเป็น)" }, example: "https://your-domain.com/ticket-callback" }
          ],
          bodyExample: {
            oldAd: 1001,
            newAd: 1002,
            accountIdThai: "TH-8812",
            callbackUrl: "https://your-domain.com/ticket-callback"
          },
          responseStatus: 200,
          responseExample: {
            success: true,
            data: {
              createdAt: 1719162000,
              note: 0,
              callbackUrl: "https://your-domain.com/ticket-callback",
              status: "Pending",
              reasonForRefusal: null,
              accountIdThai: "TH-8812",
              id: 50012,
              oldAd: {
                name: "Campaign Source Account",
                facebookUid: "100088921123",
                status: "Active",
                id: "1001"
              },
              newAd: {
                name: "Campaign Target Account",
                facebookUid: "100088929999",
                status: "Active",
                id: "1002"
              }
            }
          }
        },
        {
          id: "get-detail-request-money",
          title: { en: "Get Detail Money Transfer Request", th: "ดูรายละเอียดคำขอโอนเงินระหว่างบัญชี" },
          method: "POST",
          path: "/api/ThaiLan/CustomerTicketByThaiLan/get-detail-request-money/{id}",
          type: "endpoint",
          category: "account",
          summary: {
            en: "Retrieve detailed status and transferId for a money transfer ticket.",
            th: "ดึงรายละเอียดสถานะและรหัสคำสั่งโอนเงิน (transferId)"
          },
          headers: [{ name: "API_KEY", value: "{{API_KEY}}", required: true }],
          pathParams: [
            { name: "id", type: "long", required: true, description: { en: "Transfer Request Ticket ID", th: "ID ตั๋วคำขอโอนเงิน" }, example: 50012 }
          ],
          responseStatus: 200,
          responseExample: {
            success: true,
            data: {
              createdAt: 1719162000,
              note: 0,
              callbackUrl: "https://your-domain.com/ticket-callback",
              status: "Success",
              reasonForRefusal: null,
              accountIdThai: "TH-8812",
              id: 50012,
              transferId: 99182,
              oldAd: {
                name: "Campaign Source Account",
                facebookUid: "100088921123",
                status: "Revoked",
                id: "1001"
              },
              newAd: {
                name: "Campaign Target Account",
                facebookUid: "100088929999",
                status: "Active",
                id: "1002"
              }
            }
          }
        }
      ]
    },
    {
      id: "topup-management",
      icon: "dollar-sign",
      title: { en: "2. Top Up FB Account", th: "2. เติมเงินบัญชีโฆษณา (Top Up)" },
      description: {
        en: "Create top-up orders for Facebook ad accounts and query order details.",
        th: "สร้างคำสั่งเติมเงินเข้าบัญชีโฆษณา Facebook และตรวจสอบรายละเอียดคำสั่งเติมเงิน"
      },
      items: [
        {
          id: "create-topup",
          title: { en: "Create Top-Up Order", th: "สร้างคำสั่งเติมเงิน" },
          method: "POST",
          path: "/api/ThaiLan/TopupOrderByThaiLan/create-topup",
          type: "endpoint",
          category: "topup",
          summary: {
            en: "Create a new top-up transaction for an ad account.",
            th: "สร้างรายการเติมเงินใหม่เข้าบัญชีโฆษณา"
          },
          headers: [{ name: "API_KEY", value: "{{API_KEY}}", required: true }],
          bodyParams: [
            { name: "adsId", type: "long", required: true, description: { en: "System Ad Account ID", th: "ID ของบัญชีโฆษณาในระบบ" }, example: 10074 },
            { name: "amount", type: "decimal", required: true, description: { en: "Amount to top up", th: "จำนวนเงินที่ต้องการเติม" }, example: 1000.00 },
            { name: "currency", type: "string", required: true, description: { en: "Currency code (e.g., USD)", th: "รหัสสกุลเงิน เช่น USD" }, example: "USD" },
            { name: "referenceCode", type: "string", required: false, description: { en: "Client reference code", th: "รหัสอ้างอิงของลูกค้า" }, example: "REF-2025-001" },
            { name: "accountId", type: "string", required: false, description: { en: "Associated Account ID string", th: "ID บัญชีลูกค้า" }, example: "123456" }
          ],
          bodyExample: {
            adsId: 10074,
            amount: 1000.00,
            currency: "USD",
            referenceCode: "REF-2025-001",
            accountId: "123456"
          },
          responseStatus: 200,
          responseExample: {
            success: true,
            data: {
              amount: 1000.00,
              fee: 70.00,
              amountDisplay: 1070.00,
              createDate: 1719164400000,
              currency: "USD",
              status: "Pending",
              limitBefore: 0.00,
              limitAfter: 0.00,
              note: "123456:REF-2025-001",
              accountId: "123456",
              referenceCode: "REF-2025-001",
              infoAds: {
                name: "Main Ad Account",
                facebookUid: "1673715149385",
                status: "Active"
              },
              id: 88210
            }
          }
        },
        {
          id: "get-detail-topup",
          title: { en: "Get Top-Up Order Detail", th: "ดูรายละเอียดคำสั่งเติมเงิน" },
          method: "GET",
          path: "/api/ThaiLan/TopupOrderByThaiLan/getdetail/{orderId}",
          type: "endpoint",
          category: "topup",
          summary: {
            en: "Fetch details, message logs, and status for a specific top-up order.",
            th: "ดึงรายละเอียด บันทึกข้อความ และสถานะของคำสั่งเติมเงิน"
          },
          headers: [{ name: "API_KEY", value: "{{API_KEY}}", required: true }],
          pathParams: [
            { name: "orderId", type: "integer", required: true, description: { en: "Top-up Order ID", th: "ID คำสั่งเติมเงิน" }, example: 88210 }
          ],
          responseStatus: 200,
          responseExample: {
            success: true,
            data: {
              amount: 1000.00,
              fee: 70.00,
              amountDisplay: 1070.00,
              createDate: 1719164400000,
              currency: "USD",
              status: "Success",
              limitBefore: 0.00,
              limitAfter: 1000.00,
              accountId: "123456",
              referenceCode: "REF-2025-001",
              infoAds: {
                name: "Main Ad Account",
                facebookUid: "1673715149385",
                status: "Active"
              },
              detailMessage: [
                {
                  message: "Top-up order created successfully",
                  createdDate: 1719164400000
                },
                {
                  message: "Funds applied to Facebook Ad Account",
                  createdDate: 1719164520000
                }
              ],
              id: 88210
            }
          }
        }
      ]
    },
    {
      id: "balance-management",
      icon: "bar-chart-2",
      title: { en: "3. Check Balance", th: "3. ตรวจสอบยอดคงเหลือ (Check Balance)" },
      description: {
        en: "Query real-time balances for multiple Facebook ad accounts or list all active ads.",
        th: "ตรวจสอบยอดคงเหลือแบบเรียลไทม์สำหรับบัญชีโฆษณา และดึงรายการโฆษณาทั้งหมด"
      },
      items: [
        {
          id: "check-balance-thai",
          title: { en: "Check Balance for Ad Accounts", th: "ตรวจสอบยอดคงเหลือตาม Facebook Ads ID" },
          method: "POST",
          path: "/api/ThaiLan/Ad/check-balance-Thai",
          type: "endpoint",
          category: "balance",
          summary: {
            en: "Batch check balance for an array of Facebook Ads IDs.",
            th: "ตรวจสอบยอดคงเหลือพร้อมกันหลายบัญชีโดยส่ง Array ของ FacebookAdsId"
          },
          headers: [
            { name: "API_KEY", value: "{{API_KEY}}", required: true },
            { name: "Content-Type", value: "application/json", required: true }
          ],
          bodyParams: [
            { name: "body", type: "array of string", required: true, description: { en: "Array of Facebook Ads IDs", th: "อาร์เรย์ของ Facebook Ads ID" }, example: ["1673715149385", "1673715149386"] }
          ],
          bodyExample: [
            "1673715149385",
            "1673715149386"
          ],
          responseStatus: 200,
          responseExample: {
            totalRequests: 2,
            successCount: 2,
            errorCount: 0,
            errorDetail: [
              {
                info: "",
                message: ""
              }
            ]
          }
        },
        {
          id: "get-all-ads-thai",
          title: { en: "Get All Thai Ads Accounts", th: "ดึงรายการบัญชีโฆษณาทั้งหมด" },
          method: "GET",
          path: "/api/ThaiLan/Ad/get-all-ads-Thai",
          type: "endpoint",
          category: "balance",
          summary: {
            en: "Retrieve list of all ad accounts with balance, status, currency, and topup statistics.",
            th: "ดึงข้อมูลบัญชีโฆษณาทั้งหมด ยอดเงินคงเหลือ สถานะ สกุลเงิน และสถิติการเติมเงิน"
          },
          headers: [{ name: "API_KEY", value: "{{API_KEY}}", required: true }],
          responseStatus: 200,
          responseExample: {
            success: true,
            message: "",
            data: [
              {
                name: "Agency Campaign Alpha",
                facebookAdsId: "1673715149385",
                lastTopupDate: 1719157200000,
                updateAt: 1719164400000,
                balance: 1420.50,
                timezone: "Asia/Bangkok",
                currency: "USD",
                nationallity: "Thailand",
                adsStatus: "ACTIVE",
                topupFee: 7.00,
                totalAmountTopup: 5000.00
              },
              {
                name: "E-Commerce Scale Pro",
                facebookAdsId: "1673715149999",
                lastTopupDate: 1719000000000,
                updateAt: 1719160000000,
                balance: 3100.00,
                timezone: "Asia/Bangkok",
                currency: "USD",
                nationallity: "Thailand",
                adsStatus: "ACTIVE",
                topupFee: 7.00,
                totalAmountTopup: 12000.00
              }
            ]
          }
        }
      ]
    },
    {
      id: "statement-management",
      icon: "file-text",
      title: { en: "4. Customer Statement / Receipts", th: "4. ประวัติและใบเสร็จ (Statement / Receipt)" },
      description: {
        en: "Retrieve full historical records of all top-up transactions.",
        th: "ดึงประวัติรายการคำสั่งเติมเงินทั้งหมดสำหรับการตรวจสอบและทำบัญชี"
      },
      items: [
        {
          id: "get-all-topup",
          title: { en: "Get All Top-Up Orders", th: "ดึงรายการคำสั่งเติมเงินทั้งหมด" },
          method: "GET",
          path: "/api/ThaiLan/TopupOrderByThaiLan/get-all-topup",
          type: "endpoint",
          category: "statement",
          summary: {
            en: "Returns complete statement of all top-up transactions for the business.",
            th: "ดึงรายการคำสั่งเติมเงินทั้งหมดของธุรกิจ"
          },
          headers: [{ name: "API_KEY", value: "{{API_KEY}}", required: true }],
          responseStatus: 200,
          responseExample: {
            success: true,
            data: [
              {
                amount: 1000.00,
                fee: 70.00,
                amountDisplay: 1070.00,
                createDate: "2025-06-23T15:40:06.9970029",
                currency: "USD",
                status: 1,
                limitBefore: 0.00,
                limitAfter: 1000.00,
                note: "123456:Code",
                accountId: "123456",
                referenceCode: "Code",
                infoAds: {
                  name: "Tròi Mây Vip Pro",
                  facebookUid: "1673715149385",
                  status: "Pending"
                },
                id: 10074
              }
            ]
          }
        }
      ]
    },
    {
      id: "business-balance",
      icon: "briefcase",
      title: { en: "5. Business Money & Balances", th: "5. ยอดเงินคงเหลือธุรกิจ (Business Money)" },
      description: {
        en: "Inspect your business wallet balance across USD and VND currencies, including outstanding debts.",
        th: "ตรวจสอบยอดเงินคงเหลือในกระเป๋าเงินธุรกิจทั้ง USD และ VND รวมถึงยอดหนี้คงค้าง"
      },
      items: [
        {
          id: "get-business-amount",
          title: { en: "Get Business Amount", th: "ดูยอดเงินคงเหลือและหนี้คงค้าง" },
          method: "GET",
          path: "/api/ThaiLan/BusinessByThaiLan/get-amount",
          type: "endpoint",
          category: "wallet",
          summary: {
            en: "Fetch available wallet amounts and debt balances in USD and VND.",
            th: "ดึงยอดเงินคงเหลือใน Wallet และยอดหนี้คงค้างทั้งสกุล USD และ VND"
          },
          headers: [{ name: "API_KEY", value: "{{API_KEY}}", required: true }],
          responseStatus: 200,
          responseExample: {
            success: true,
            data: {
              amountUSD: 4520.00,
              amountVND: 0,
              debtAmountUSD: 90.00,
              debtAmountVND: 0.00
            }
          },
          notes: {
            en: "Note: If you attempt a top-up exceeding your current available balance, the transaction will be rejected.",
            th: "หมายเหตุ: หากคุณทำรายการเติมเงินเกินกว่ายอดคงเหลือปัจจุบันในกระเป๋า ระบบจะไม่อนุญาตให้ทำรายการ"
          }
        }
      ]
    },
    {
      id: "debt-management",
      icon: "credit-card",
      title: { en: "6. Payment Order / Debt API", th: "6. การชำระหนี้ (Payment Order / Debt)" },
      description: {
        en: "View debt records and submit payment proofs with attachments via multipart form-data.",
        th: "ดูประวัติหนี้ และส่งหลักฐานการชำระเงินพร้อมแนบไฟล์ผ่าน multipart form-data"
      },
      items: [
        {
          id: "get-all-debt",
          title: { en: "Get All Debt Information", th: "ดึงข้อมูลประวัติหนี้ทั้งหมด" },
          method: "GET",
          path: "/api/ThaiLan/DebtByThaiLan/Get-All-Debt",
          type: "endpoint",
          category: "debt",
          summary: {
            en: "Retrieve all debt payment records, admin assignments, user details, and proof references.",
            th: "ดึงรายการบันทึกหนี้ทั้งหมด ข้อมูลผู้ดูแล ผู้ใช้งาน และหลักฐานการชำระเงิน"
          },
          headers: [{ name: "API_KEY", value: "{{API_KEY}}", required: true }],
          responseStatus: 200,
          responseExample: {
            success: true,
            data: [
              {
                amount: 500.00,
                wallet: "USD",
                admin: {
                  id: 1,
                  name: "Finance Admin",
                  email: "admin@nolimittopup.com",
                  avatar: null
                },
                user: {
                  id: 20078,
                  name: "Thai Media Partner",
                  email: "partner@example.com",
                  avatar: null
                },
                proofPayment: "PAY-PROOF-9921",
                paymentPhoto: "https://storage.nolimittopup.com/proofs/p9921.jpg",
                previousBalance: 590.00,
                remainingBalance: 90.00,
                createAt: "2025-08-20T08:15:32.658Z",
                status: "Approved",
                acceptanceDate: "2025-08-20T09:00:00.000Z",
                rejectReason: null,
                id: 301
              }
            ]
          }
        },
        {
          id: "create-debt",
          title: { en: "Create Debt / Payment Submission", th: "สร้างรายการชำระหนี้ (แนบไฟล์)" },
          method: "POST",
          path: "/api/ThaiLan/DebtByThaiLan/create-debt",
          type: "endpoint",
          category: "debt",
          contentType: "multipart/form-data",
          summary: {
            en: "Submit a debt payment order with proof of payment and file attachments.",
            th: "ส่งรายการชำระหนี้พร้อมหลักฐานและไฟล์แนบ (form-data)"
          },
          headers: [{ name: "API_KEY", value: "{{API_KEY}}", required: true }],
          formDataParams: [
            { name: "Amount", type: "text (decimal)", required: true, description: { en: "Total payment amount", th: "จำนวนเงินที่ชำระ" }, example: "500.00" },
            { name: "ProofPayment", type: "text", required: true, description: { en: "Description or reference ID for payment proof", th: "คำอธิบายหรือรหัสอ้างอิงหลักฐานการชำระเงิน" }, example: "Bank Slip 88219" },
            { name: "Wallet", type: "text", required: true, description: { en: "Target wallet currency (e.g. USD, VND)", th: "สกุลเงินกระเป๋าเงิน เช่น USD, VND" }, example: "USD" },
            { name: "files", type: "file", required: false, description: { en: "Supporting bank receipt or invoice image/pdf", th: "ไฟล์สลิปหรือเอกสารประกอบการชำระเงิน" }, example: "slip.png" }
          ],
          responseStatus: 200,
          responseExample: {
            success: true,
            message: "Debt payment entry created successfully and pending review."
          }
        }
      ]
    },
    {
      id: "loans-management",
      icon: "shield",
      title: { en: "7. Loans API", th: "7. สินเชื่อธุรกิจ (Loans API)" },
      description: {
        en: "Apply for business credit lines / loans and monitor approval statuses.",
        th: "ขออนุมัติสินเชื่อธุรกิจและตรวจสอบสถานะการอนุมัติ"
      },
      items: [
        {
          id: "get-all-loan",
          title: { en: "Get All Loan Information", th: "ดึงข้อมูลสินเชื่อทั้งหมด" },
          method: "GET",
          path: "/api/ThaiLan/LoanByThaiLan/Get-All-Loan",
          type: "endpoint",
          category: "loans",
          summary: {
            en: "List all loan applications, amounts, statuses, and administrator reviews.",
            th: "ดึงรายการคำขอสินเชื่อทั้งหมด จำนวนเงิน สถานะ และข้อมูลผู้อนุมัติ"
          },
          headers: [{ name: "API_KEY", value: "{{API_KEY}}", required: true }],
          responseStatus: 200,
          responseExample: [
            {
              id: 401,
              businessId: 37,
              userId: 20078,
              createAt: "2025-08-15T10:00:00.000Z",
              amount: 5000,
              wallet: "USD",
              adminId: 1,
              status: "Approved",
              infoUser: {
                id: 20078,
                name: "Thai Media Partner",
                email: "partner@example.com",
                avatar: null
              },
              admin: {
                id: 1,
                name: "Credit Manager",
                email: "manager@nolimittopup.com",
                avatar: null
              },
              acceptanceDate: "2025-08-15T11:30:00.000Z"
            }
          ]
        },
        {
          id: "create-loan",
          title: { en: "Create Loan Request", th: "สร้างคำขอกู้สินเชื่อใหม่" },
          method: "POST",
          path: "/api/ThaiLan/LoanByThaiLan/create-loan",
          type: "endpoint",
          category: "loans",
          summary: {
            en: "Submit a new loan request for a designated amount and currency wallet.",
            th: "ส่งคำขอสินเชื่อใหม่ตามจำนวนเงินและสกุลเงินที่ระบุ"
          },
          headers: [
            { name: "API_KEY", value: "{{API_KEY}}", required: true },
            { name: "Content-Type", value: "application/json", required: true }
          ],
          bodyParams: [
            { name: "amount", type: "integer", required: true, description: { en: "Loan amount requested (positive integer)", th: "จำนวนเงินกู้ที่ต้องการ (จำนวนเต็มบวก)" }, example: 5000 },
            { name: "wallet", type: "string", required: true, description: { en: "Currency wallet code (e.g. USD)", th: "ประเภทสกุลเงิน เช่น USD" }, example: "USD" }
          ],
          bodyExample: {
            amount: 5000,
            wallet: "USD"
          },
          responseStatus: 200,
          responseExample: {
            success: true,
            message: "Loan application submitted successfully.",
            data: {
              id: 402,
              businessId: 37,
              userId: 20078,
              createAt: "2025-08-29T15:00:00.000Z",
              amount: 5000,
              wallet: "USD",
              adminId: null,
              status: "Pending",
              infoUser: null,
              admin: null,
              acceptanceDate: null
            }
          }
        }
      ]
    },
    {
      id: "transfer-management",
      icon: "repeat",
      title: { en: "8. Remittance & Transfer API", th: "8. รายการโอนเงิน (Transfer API)" },
      description: {
        en: "Monitor background money transfers, limits, spent amounts, and step histories.",
        th: "ติดตามคำสั่งโอนเงิน ยอดที่ใช้ไป วงเงิน และประวัติขั้นตอนการโอน"
      },
      items: [
        {
          id: "get-all-transfer",
          title: { en: "Get All Transfers", th: "ดึงรายการคำสั่งโอนเงินทั้งหมด" },
          method: "GET",
          path: "/api/ThaiLan/Transfer/get-all",
          type: "endpoint",
          category: "transfer",
          summary: {
            en: "Fetch all remittance / money transfer orders across ad accounts.",
            th: "ดึงคำสั่งโอนเงินทั้งหมดระหว่างบัญชีโฆษณา"
          },
          headers: [{ name: "API_KEY", value: "{{API_KEY}}", required: true }],
          responseStatus: 200,
          responseExample: {
            success: true,
            data: [
              {
                createdAt: "2025-08-20T08:00:00Z",
                updatedAt: "2025-08-20T08:15:00Z",
                firstTransfer: 500.00,
                timeFirstTransfer: "2025-08-20T08:05:00Z",
                status: "Completed",
                secondTransfer: 500.00,
                timeSecondTransfer: "2025-08-20T08:14:00Z",
                spent: 240.00,
                spentLimit: 1000.00,
                remainingAmount: 760.00,
                totalTransferAmount: 1000.00,
                id: 99182,
                oldAd: {
                  name: "Old Campaign Ad Set",
                  facebookUid: "100088921123",
                  status: "Revoked",
                  id: "1001"
                },
                newAd: {
                  name: "New Scaling Ad Set",
                  facebookUid: "100088929999",
                  status: "Active",
                  id: "1002"
                }
              }
            ]
          }
        },
        {
          id: "get-detail-transfer",
          title: { en: "Get Transfer Detail & History", th: "ดูรายละเอียดและประวัติขั้นตอนการโอน" },
          method: "GET",
          path: "/api/ThaiLan/Transfer/get-detail-transfer/{id}",
          type: "endpoint",
          category: "transfer",
          summary: {
            en: "Retrieve detailed remittance execution logs and step messages.",
            th: "ดึงรายละเอียดและประวัติขั้นตอนข้อความการประมวลผลคำสั่งโอนเงิน"
          },
          headers: [{ name: "API_KEY", value: "{{API_KEY}}", required: true }],
          pathParams: [
            { name: "id", type: "long", required: true, description: { en: "Transfer Order ID", th: "ID ของคำสั่งโอนเงิน" }, example: 99182 }
          ],
          responseStatus: 200,
          responseExample: {
            success: true,
            data: [
              {
                createdAt: "2025-08-20T08:00:00Z",
                updatedAt: "2025-08-20T08:15:00Z",
                firstTransfer: 500.00,
                timeFirstTransfer: "2025-08-20T08:05:00Z",
                status: "Completed",
                secondTransfer: 500.00,
                timeSecondTransfer: "2025-08-20T08:14:00Z",
                spent: 240.00,
                spentLimit: 1000.00,
                remainingAmount: 760.00,
                totalTransferAmount: 1000.00,
                id: 99182,
                oldAd: {
                  name: "Old Campaign Ad Set",
                  facebookUid: "100088921123",
                  status: "Revoked",
                  id: "1001"
                },
                newAd: {
                  name: "New Scaling Ad Set",
                  facebookUid: "100088929999",
                  status: "Active",
                  id: "1002"
                },
                histories: [
                  {
                    message: "Initiated first stage balance transfer of $500.00",
                    createdDate: "2025-08-20T08:05:00Z"
                  },
                  {
                    message: "Initiated final stage transfer of $500.00. Old ad account marked as revoked.",
                    createdDate: "2025-08-20T08:14:00Z"
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "webhook-callback",
      icon: "radio",
      title: { en: "9. API Callback Webhooks", th: "9. ระบบ Webhook Callback" },
      description: {
        en: "Implement real-time async callbacks for account provisioning, refunds, and ticket resolution.",
        th: "การเชื่อมต่อระบบ Callback แบบ Asynchronous เมื่อคำขอเปิดบัญชีหรือขอคืนเงินเสร็จสมบูรณ์"
      },
      items: [
        {
          id: "webhook-step1-guide",
          title: { en: "Step 1: Supply callbackUrl in Requests", th: "ขั้นตอนที่ 1: เพิ่มฟิลด์ callbackUrl ในคำขอ" },
          type: "guide",
          content: {
            en: `
### Step 1: Add \`callbackUrl\` in Your Account or Refund Requests
When creating an **Account Request** or **Revoke + Refund Request**, provide the optional \`callbackUrl\` field:

> **URL Endpoint**: \`http://api.nolimittopup.com/api/ThaiLan/CustomerTicketByThaiLan/request-account\`

\`\`\`json
{
  "bmId": "123456789012345",
  "currency": "USD",
  "timezone": "Asia/Bangkok",
  "quantity": 1,
  "callbackUrl": "https://your-domain.com/ticket-callback"
}
\`\`\`
            `,
            th: `
### ขั้นตอนที่ 1: เพิ่มฟิลด์ \`callbackUrl\` ในคำขอของคุณ
เมื่อเรียกใช้งาน API ขอเปิดบัญชี หรือ ขอคืนเงิน ให้ระบุฟิลด์ \`callbackUrl\` เพื่อให้ระบบส่งการแจ้งเตือนอัตโนมัติเมื่อประมวลผลเสร็จสิ้น:

> **URL Endpoint**: \`http://api.nolimittopup.com/api/ThaiLan/CustomerTicketByThaiLan/request-account\`

\`\`\`json
{
  "bmId": "123456789012345",
  "currency": "USD",
  "timezone": "Asia/Bangkok",
  "quantity": 1,
  "callbackUrl": "https://your-domain.com/ticket-callback"
}
\`\`\`
            `
          }
        },
        {
          id: "webhook-receiver-spec",
          title: { en: "Step 2: Webhook Receiver Specification", th: "ขั้นตอนที่ 2: โครงสร้างข้อมูล Webhook Receiver" },
          method: "POST",
          path: "/your-domain/ticket-callback",
          type: "endpoint",
          category: "webhook",
          summary: {
            en: "Inbound HTTP POST dispatched by ThaiLan server to your callbackUrl when tickets are processed.",
            th: "คำขอ HTTP POST ที่เซิร์ฟเวอร์ ThaiLan ส่งมายัง callbackUrl ของคุณเมื่อคำขอได้รับการประมวลผล"
          },
          headers: [
            { name: "Content-Type", value: "application/json", required: true }
          ],
          bodyParams: [
            { name: "ticketId", type: "integer (long)", required: true, description: { en: "ID of the processed request ticket", th: "ID ของคำขอที่ได้รับการประมวลผล" }, example: 10021 },
            { name: "status", type: "string", required: true, description: { en: "Status of the request ('Success' or 'Reject')", th: "สถานะของคำขอ ('Success' หรือ 'Reject')" }, example: "Success" },
            { name: "requestType", type: "string", required: true, description: { en: "Type of request ('Provide Ad account' or 'Return and refund money Ad account')", th: "ประเภทของคำขอ ('Provide Ad account' หรือ 'Return and refund money Ad account')" }, example: "Provide Ad account" },
            { name: "adId", type: "integer (long)", required: false, description: { en: "ID of the assigned Ad account", th: "ID ของบัญชีโฆษณาที่ได้รับ" }, example: 20 },
            { name: "amountThaiLan", type: "decimal", required: false, description: { en: "Amount processed", th: "จำนวนเงิน" }, example: 1000.00 },
            { name: "accountId", type: "string", required: false, description: { en: "Account reference ID", th: "ID บัญชี" }, example: "ACC-12345" },
            { name: "requireName", type: "string", required: false, description: { en: "Required account name", th: "ชื่อที่ต้องการ" }, example: "VIP Pro Account" },
            { name: "businessId", type: "integer (long)", required: true, description: { en: "Your Business ID", th: "ID ธุรกิจของคุณ" }, example: 37 },
            { name: "userId", type: "integer (long)", required: true, description: { en: "ID of the user who created the request", th: "ID ของผู้ใช้ที่สร้างคำขอ" }, example: 20078 },
            { name: "processedAt", type: "datetime", required: true, description: { en: "Datetime when processed (ISO 8601)", th: "วันที่และเวลาที่ประมวลผลเสร็จ" }, example: "2025-08-20T08:15:32.658Z" },
            { name: "withdrawId", type: "integer (long)", required: false, description: { en: "ID of withdrawal record", th: "ID ของบันทึกการถอน" }, example: 112 },
            { name: "totalRefund", type: "decimal", required: false, description: { en: "Total refund amount credited", th: "จำนวนเงินคืนทั้งหมด" }, example: 1000.00 }
          ],
          bodyExample: {
            ticketId: 10021,
            status: "Success",
            requestType: "Provide Ad account",
            adId: 20,
            businessId: 37,
            userId: 20078,
            processedAt: "2025-08-20T08:15:32.658Z",
            withdrawId: 112,
            totalRefund: 1000
          },
          responseStatus: 200,
          responseExample: {
            success: true
          },
          notes: {
            en: "Expected Response: Your server must respond with HTTP Status 200 OK and JSON: { \"success\": true }",
            th: "การตอบกลับที่ระบบคาดหวัง: เซิร์ฟเวอร์ของคุณต้องตอบกลับด้วย HTTP 200 OK พร้อม JSON: { \"success\": true }"
          }
        }
      ]
    }
  ];

  let currentLang = 'en';
  let currentTheme = localStorage.getItem('thailan_theme') || 'dark';
  let activeSnippetLangs = {};
  let activeEndpoint = null;

  document.addEventListener('DOMContentLoaded', () => {
    initApp();
  });

  function initApp() {
    initThemeToggle();
    initLanguageToggle();
    initSearch();
    initPlayground();
    renderSidebar();
    renderContent();
    initScrollSpy();
    initMobileMenu();
  }

  // --- THEME SWITCHER ---
  function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    applyTheme(currentTheme);

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('thailan_theme', currentTheme);
        applyTheme(currentTheme);
      });
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const moonIcon = document.getElementById('theme-moon-icon');
    const sunIcon = document.getElementById('theme-sun-icon');

    // If currently dark, show Sun icon so clicking switches to Light mode
    // If currently light, show Moon icon so clicking switches to Dark mode
    if (theme === 'dark') {
      if (moonIcon) moonIcon.style.display = 'none';
      if (sunIcon) sunIcon.style.display = 'block';
    } else {
      if (moonIcon) moonIcon.style.display = 'block';
      if (sunIcon) sunIcon.style.display = 'none';
    }
  }

  // --- LANGUAGE SWITCHER ---
  function initLanguageToggle() {
    const toggleBtn = document.getElementById('lang-toggle-btn');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'th' : 'en';
      updateLanguageUI();
      renderSidebar();
      renderContent();
    });
  }

  function updateLanguageUI() {
    const langText = document.getElementById('lang-text');
    const langFlag = document.getElementById('lang-flag');

    if (currentLang === 'th') {
      if (langText) langText.textContent = 'ไทย (TH)';
      if (langFlag) langFlag.textContent = '🇹🇭';
    } else {
      if (langText) langText.textContent = 'English (EN)';
      if (langFlag) langFlag.textContent = '🇺🇸';
    }
  }

  // --- SIDEBAR RENDERING ---
  function renderSidebar() {
    const sidebarNav = document.getElementById('sidebar-navigation');
    if (!sidebarNav) return;

    let html = '';
    API_SECTIONS.forEach(section => {
      const sectionTitle = section.title[currentLang] || section.title.en;
      html += `
        <div class="sidebar-group">
          <div class="sidebar-group-title">
            <span>${sectionTitle}</span>
          </div>
          <ul class="sidebar-links">
      `;

      section.items.forEach(item => {
        const itemTitle = item.title[currentLang] || item.title.en;
        const methodBadge = item.method 
          ? `<span class="sidebar-link-method badge-method ${item.method.toLowerCase()}">${item.method}</span>`
          : '';
        
        html += `
          <li>
            <a href="#${item.id}" class="sidebar-link" data-target="${item.id}">
              <span>${itemTitle}</span>
              ${methodBadge}
            </a>
          </li>
        `;
      });

      html += `
          </ul>
        </div>
      `;
    });

    sidebarNav.innerHTML = html;

    document.querySelectorAll('.sidebar-link').forEach(link => {
      link.addEventListener('click', () => {
        isManualScroll = true;
        clearTimeout(scrollTimeout);
        
        document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        scrollTimeout = setTimeout(() => {
          isManualScroll = false;
        }, 800);

        const sidebar = document.getElementById('sidebar');
        if (sidebar && window.innerWidth <= 860) {
          sidebar.classList.remove('open');
        }
      });
    });
  }

  // --- CONTENT RENDERING ---
  function renderContent() {
    const container = document.getElementById('docs-content-container');
    if (!container) return;

    let html = '';
    API_SECTIONS.forEach(section => {
      const sectionTitle = section.title[currentLang] || section.title.en;
      const sectionDesc = section.description[currentLang] || section.description.en;

      html += `
        <section class="doc-section" id="section-${section.id}">
          <div class="section-header">
            <h2 class="section-header-title">${sectionTitle}</h2>
            <p class="section-header-desc">${sectionDesc}</p>
          </div>
      `;

      section.items.forEach(item => {
        if (item.type === 'guide') {
          html += renderGuideItem(item);
        } else {
          html += renderEndpointItem(item);
        }
      });

      html += `</section>`;
    });

    container.innerHTML = html;
    attachDynamicListeners();
  }

  function renderGuideItem(item) {
    const rawContent = item.content[currentLang] || item.content.en;
    const parsedHtml = formatMarkdown(rawContent);

    return `
      <div class="guide-content" id="${item.id}">
        <div class="guide-body">
          ${parsedHtml}
        </div>
      </div>
    `;
  }

  function renderEndpointItem(item) {
    const title = item.title[currentLang] || item.title.en;
    const summary = item.summary[currentLang] || item.summary.en;
    const methodClass = (item.method || 'post').toLowerCase();

    let paramsHtml = '';

    if (item.queryParams && item.queryParams.length > 0) {
      paramsHtml += `
        <div class="endpoint-section-title">${currentLang === 'th' ? 'พารามิเตอร์ Query String' : 'Query Parameters'}</div>
        <div class="param-table-container">
          <table class="param-table">
            <thead>
              <tr>
                <th>${currentLang === 'th' ? 'พารามิเตอร์' : 'Parameter'}</th>
                <th>${currentLang === 'th' ? 'ประเภท' : 'Type'}</th>
                <th>${currentLang === 'th' ? 'คำอธิบาย' : 'Description'}</th>
              </tr>
            </thead>
            <tbody>
              ${item.queryParams.map(p => `
                <tr>
                  <td>
                    <span class="param-name">${p.name}</span>
                    ${p.required ? `<span class="param-badge-req">${currentLang === 'th' ? 'จำเป็น' : 'Required'}</span>` : `<span class="param-badge-opt">${currentLang === 'th' ? 'ไม่จำเป็น' : 'Optional'}</span>`}
                  </td>
                  <td><span class="param-type">${p.type}</span></td>
                  <td>
                    <div class="param-desc">${p.description[currentLang] || p.description.en}</div>
                    ${p.example ? `<div class="param-example">Example: <code>${p.example}</code></div>` : ''}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    if (item.pathParams && item.pathParams.length > 0) {
      paramsHtml += `
        <div class="endpoint-section-title">${currentLang === 'th' ? 'พารามิเตอร์ใน URL Path' : 'Path Parameters'}</div>
        <div class="param-table-container">
          <table class="param-table">
            <thead>
              <tr>
                <th>${currentLang === 'th' ? 'พารามิเตอร์' : 'Parameter'}</th>
                <th>${currentLang === 'th' ? 'ประเภท' : 'Type'}</th>
                <th>${currentLang === 'th' ? 'คำอธิบาย' : 'Description'}</th>
              </tr>
            </thead>
            <tbody>
              ${item.pathParams.map(p => `
                <tr>
                  <td>
                    <span class="param-name">${p.name}</span>
                    <span class="param-badge-req">${currentLang === 'th' ? 'จำเป็น' : 'Required'}</span>
                  </td>
                  <td><span class="param-type">${p.type}</span></td>
                  <td>
                    <div class="param-desc">${p.description[currentLang] || p.description.en}</div>
                    ${p.example ? `<div class="param-example">Example: <code>${p.example}</code></div>` : ''}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    if (item.bodyParams && item.bodyParams.length > 0) {
      paramsHtml += `
        <div class="endpoint-section-title">${currentLang === 'th' ? 'พารามิเตอร์ใน Request Body (JSON)' : 'Request Body Parameters'}</div>
        <div class="param-table-container">
          <table class="param-table">
            <thead>
              <tr>
                <th>${currentLang === 'th' ? 'ฟิลด์' : 'Field'}</th>
                <th>${currentLang === 'th' ? 'ประเภท' : 'Type'}</th>
                <th>${currentLang === 'th' ? 'คำอธิบาย' : 'Description'}</th>
              </tr>
            </thead>
            <tbody>
              ${item.bodyParams.map(p => `
                <tr>
                  <td>
                    <span class="param-name">${p.name}</span>
                    ${p.required ? `<span class="param-badge-req">${currentLang === 'th' ? 'จำเป็น' : 'Required'}</span>` : `<span class="param-badge-opt">${currentLang === 'th' ? 'ไม่จำเป็น' : 'Optional'}</span>`}
                  </td>
                  <td><span class="param-type">${p.type}</span></td>
                  <td>
                    <div class="param-desc">${p.description[currentLang] || p.description.en}</div>
                    ${p.example ? `<div class="param-example">Example: <code>${typeof p.example === 'object' ? JSON.stringify(p.example) : p.example}</code></div>` : ''}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    if (item.formDataParams && item.formDataParams.length > 0) {
      paramsHtml += `
        <div class="endpoint-section-title">${currentLang === 'th' ? 'ฟอร์มพารามิเตอร์ (multipart/form-data)' : 'Form-Data Parameters'}</div>
        <div class="param-table-container">
          <table class="param-table">
            <thead>
              <tr>
                <th>${currentLang === 'th' ? 'ฟิลด์' : 'Field'}</th>
                <th>${currentLang === 'th' ? 'ประเภท' : 'Type'}</th>
                <th>${currentLang === 'th' ? 'คำอธิบาย' : 'Description'}</th>
              </tr>
            </thead>
            <tbody>
              ${item.formDataParams.map(p => `
                <tr>
                  <td>
                    <span class="param-name">${p.name}</span>
                    ${p.required ? `<span class="param-badge-req">${currentLang === 'th' ? 'จำเป็น' : 'Required'}</span>` : `<span class="param-badge-opt">${currentLang === 'th' ? 'ไม่จำเป็น' : 'Optional'}</span>`}
                  </td>
                  <td><span class="param-type">${p.type}</span></td>
                  <td>
                    <div class="param-desc">${p.description[currentLang] || p.description.en}</div>
                    ${p.example ? `<div class="param-example">Example: <code>${p.example}</code></div>` : ''}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }

    if (item.notes) {
      const rawNotes = item.notes[currentLang] || item.notes.en;
      paramsHtml += `
        <div class="alert-banner note" style="margin-top:1.25rem;">
          ${formatMarkdown(rawNotes)}
        </div>
      `;
    }

    const defaultSnippetLang = activeSnippetLangs[item.id] || 'curl';
    const snippetContent = generateCodeSnippet(item, defaultSnippetLang);

    return `
      <div class="endpoint-grid" id="${item.id}">
        <div class="endpoint-info">
          <div class="endpoint-header">
            <span class="badge-method ${methodClass}">${item.method}</span>
            <h3 class="endpoint-title">${title}</h3>
          </div>
          <p class="endpoint-summary">${summary}</p>
          
          <div class="endpoint-path-box">
            <span class="badge-method ${methodClass}">${item.method}</span>
            <span class="path-url">${item.path}</span>
          </div>

          ${paramsHtml}
        </div>

        <div class="endpoint-code-panel">
          <div class="code-card">
            <div class="code-header">
              <div class="code-tabs">
                <button class="code-tab-btn ${defaultSnippetLang === 'curl' ? 'active' : ''}" data-endpoint="${item.id}" data-lang="curl">cURL</button>
                <button class="code-tab-btn ${defaultSnippetLang === 'python' ? 'active' : ''}" data-endpoint="${item.id}" data-lang="python">Python</button>
                <button class="code-tab-btn ${defaultSnippetLang === 'node' ? 'active' : ''}" data-endpoint="${item.id}" data-lang="node">Node.js</button>
                <button class="code-tab-btn ${defaultSnippetLang === 'ts' ? 'active' : ''}" data-endpoint="${item.id}" data-lang="ts">TypeScript</button>
              </div>
              <div class="code-actions">
                <button class="icon-action-btn copy-btn" data-copy-target="code-${item.id}" title="Copy Code">
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="code-body">
              <pre><code id="code-${item.id}">${escapeHtml(snippetContent)}</code></pre>
            </div>
          </div>

          <div class="response-card">
            <div class="response-header">
              <div class="response-status-group">
                <span class="response-label">${currentLang === 'th' ? 'ตัวอย่างการตอบกลับ' : 'Response'}</span>
                <span class="response-status-badge">200 OK</span>
              </div>
              <button class="test-endpoint-btn" data-open-playground="${item.id}">
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                </svg>
                <span>${currentLang === 'th' ? 'ทดสอบ API' : 'Test API'}</span>
              </button>
            </div>
            <div class="code-body">
              <pre><code>${JSON.stringify(item.responseExample || {}, null, 2)}</code></pre>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // --- CODE SNIPPET GENERATOR ---
  function generateCodeSnippet(endpoint, lang) {
    const fullUrl = `${API_METADATA.baseUrl}${endpoint.path}`;
    const method = endpoint.method || 'POST';

    let resolvedUrl = fullUrl;
    if (endpoint.queryParams && endpoint.queryParams.length > 0) {
      const q = endpoint.queryParams.map(p => `${p.name}=${encodeURIComponent(p.example || 'sample')}`).join('&');
      resolvedUrl += `?${q}`;
    }

    if (lang === 'curl') {
      let cmd = `curl -X ${method} "${resolvedUrl}" \\\n  -H "API_KEY: {{YOUR_API_KEY}}"`;
      if (endpoint.contentType) {
        cmd += ` \\\n  -H "Content-Type: ${endpoint.contentType}"`;
      } else if (endpoint.bodyExample || endpoint.bodyParams) {
        cmd += ` \\\n  -H "Content-Type: application/json"`;
      }

      if (endpoint.bodyExample) {
        cmd += ` \\\n  -d '${JSON.stringify(endpoint.bodyExample)}'`;
      } else if (endpoint.formDataParams) {
        endpoint.formDataParams.forEach(f => {
          cmd += ` \\\n  -F "${f.name}=${f.example || ''}"`;
        });
      }
      return cmd;
    }

    if (lang === 'python') {
      let py = `import requests\n\n`;
      py += `url = "${resolvedUrl}"\n`;
      py += `headers = {\n    "API_KEY": "YOUR_API_KEY"\n}\n\n`;
      if (endpoint.bodyExample) {
        py += `payload = ${JSON.stringify(endpoint.bodyExample, null, 4)}\n\n`;
        py += `response = requests.${method.toLowerCase()}(url, json=payload, headers=headers)\n`;
      } else {
        py += `response = requests.${method.toLowerCase()}(url, headers=headers)\n`;
      }
      py += `print(response.json())`;
      return py;
    }

    if (lang === 'node') {
      let js = `const axios = require('axios');\n\n`;
      js += `const config = {\n`;
      js += `  method: '${method.toLowerCase()}',\n`;
      js += `  url: '${resolvedUrl}',\n`;
      js += `  headers: { 'API_KEY': process.env.API_KEY }`;
      if (endpoint.bodyExample) {
        js += `,\n  data: ${JSON.stringify(endpoint.bodyExample, null, 2)}`;
      }
      js += `\n};\n\n`;
      js += `axios(config)\n  .then(res => console.log(res.data))\n  .catch(err => console.error(err));`;
      return js;
    }

    if (lang === 'ts') {
      let ts = `import { ThaiLanClient } from '@thailan/sdk';\n\n`;
      ts += `const client = new ThaiLanClient({ apiKey: 'YOUR_API_KEY' });\n\n`;
      ts += `// Call ${endpoint.id}\n`;
      ts += `const response = await client.${camelCase(endpoint.id)}(${endpoint.bodyExample ? JSON.stringify(endpoint.bodyExample) : ''});\n`;
      ts += `console.log(response);`;
      return ts;
    }

    return '';
  }

  function camelCase(str) {
    return str.replace(/-([a-z])/g, g => g[1].toUpperCase());
  }

  // --- PLAYGROUND ---
  function initPlayground() {
    const modalBackdrop = document.getElementById('playground-modal');
    const closeBtn = document.getElementById('close-playground-btn');
    const sendBtn = document.getElementById('pg-send-request-btn');

    if (closeBtn) closeBtn.addEventListener('click', closePlayground);
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closePlayground();
      });
    }
    if (sendBtn) sendBtn.addEventListener('click', executePlaygroundRequest);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
        closePlayground();
      }
    });
  }

  function openPlaygroundModal(endpointData) {
    activeEndpoint = endpointData;
    const modal = document.getElementById('playground-modal');
    const titleEl = document.getElementById('pg-modal-title');
    const methodBadge = document.getElementById('pg-method-badge');
    const pathEl = document.getElementById('pg-url-path');
    const formContainer = document.getElementById('pg-params-form');
    const responseCodeEl = document.getElementById('pg-response-code');
    const responseStatusEl = document.getElementById('pg-response-status');

    if (!modal) return;

    titleEl.textContent = endpointData.title[currentLang] || endpointData.title.en;
    methodBadge.textContent = endpointData.method || 'POST';
    methodBadge.className = `badge-method ${(endpointData.method || 'post').toLowerCase()}`;
    pathEl.textContent = `${API_METADATA.baseUrl}${endpointData.path}`;

    responseCodeEl.textContent = '// Click "Send Request" to test endpoint';
    responseStatusEl.textContent = 'Ready';
    responseStatusEl.className = 'response-status-badge';

    let html = `
      <div class="pg-form-group">
        <label class="pg-label">Header: API_KEY</label>
        <input type="text" id="pg-header-apikey" class="pg-input" placeholder="Enter your 2-month API Key..." value="" />
      </div>
    `;

    if (endpointData.pathParams && endpointData.pathParams.length > 0) {
      html += `<div class="endpoint-section-title">Path Parameters</div>`;
      endpointData.pathParams.forEach(p => {
        html += `
          <div class="pg-form-group">
            <label class="pg-label">${p.name} (${p.type}) ${p.required ? '<span style="color:#f87171">*required</span>' : ''}</label>
            <input type="text" id="pg-path-${p.name}" class="pg-input" value="${p.example || ''}" />
          </div>
        `;
      });
    }

    if (endpointData.queryParams && endpointData.queryParams.length > 0) {
      html += `<div class="endpoint-section-title">Query Parameters</div>`;
      endpointData.queryParams.forEach(p => {
        html += `
          <div class="pg-form-group">
            <label class="pg-label">${p.name} (${p.type}) ${p.required ? '<span style="color:#f87171">*required</span>' : ''}</label>
            <input type="text" id="pg-query-${p.name}" class="pg-input" value="${p.example || ''}" />
          </div>
        `;
      });
    }

    if (endpointData.bodyParams || endpointData.bodyExample) {
      html += `
        <div class="endpoint-section-title">Request Body (JSON)</div>
        <div class="pg-form-group">
          <textarea id="pg-body-json" class="pg-textarea" rows="6">${JSON.stringify(endpointData.bodyExample || {}, null, 2)}</textarea>
        </div>
      `;
    }

    if (endpointData.formDataParams) {
      html += `<div class="endpoint-section-title">Multipart Form-Data Fields</div>`;
      endpointData.formDataParams.forEach(p => {
        if (p.type === 'file') {
          html += `
            <div class="pg-form-group">
              <label class="pg-label">${p.name} (File Attachment)</label>
              <input type="file" id="pg-form-${p.name}" class="pg-input" />
            </div>
          `;
        } else {
          html += `
            <div class="pg-form-group">
              <label class="pg-label">${p.name} (${p.type})</label>
              <input type="text" id="pg-form-${p.name}" class="pg-input" value="${p.example || ''}" />
            </div>
          `;
        }
      });
    }

    formContainer.innerHTML = html;
    modal.classList.add('open');
  }

  function closePlayground() {
    const modal = document.getElementById('playground-modal');
    if (modal) modal.classList.remove('open');
  }

  function executePlaygroundRequest() {
    const responseCodeEl = document.getElementById('pg-response-code');
    const responseStatusEl = document.getElementById('pg-response-status');
    const sendBtn = document.getElementById('pg-send-request-btn');

    if (!activeEndpoint) return;

    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending Request...';
    responseStatusEl.textContent = 'Pending...';

    setTimeout(() => {
      sendBtn.disabled = false;
      sendBtn.innerHTML = `
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
        </svg>
        Send Request
      `;

      const sample = activeEndpoint.responseExample || { success: true, message: "OK" };
      responseCodeEl.textContent = JSON.stringify(sample, null, 2);
      responseStatusEl.textContent = '200 OK (Simulated)';
      responseStatusEl.className = 'response-status-badge';
    }, 400);
  }

  // --- DYNAMIC LISTENERS ---
  function attachDynamicListeners() {
    document.querySelectorAll('.code-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const endpointId = e.currentTarget.getAttribute('data-endpoint');
        const lang = e.currentTarget.getAttribute('data-lang');
        activeSnippetLangs[endpointId] = lang;

        const card = e.currentTarget.closest('.code-card');
        card.querySelectorAll('.code-tab-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');

        const endpointData = findEndpointById(endpointId);
        if (endpointData) {
          const codeEl = document.getElementById(`code-${endpointId}`);
          if (codeEl) {
            codeEl.textContent = generateCodeSnippet(endpointData, lang);
          }
        }
      });
    });

    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetId = e.currentTarget.getAttribute('data-copy-target');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          navigator.clipboard.writeText(targetEl.textContent).then(() => {
            e.currentTarget.classList.add('copied');
            setTimeout(() => e.currentTarget.classList.remove('copied'), 2000);
          });
        }
      });
    });

    document.querySelectorAll('[data-open-playground]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const endpointId = e.currentTarget.getAttribute('data-open-playground');
        const endpointData = findEndpointById(endpointId);
        if (endpointData) {
          openPlaygroundModal(endpointData);
        }
      });
    });
  }

  function findEndpointById(id) {
    for (const s of API_SECTIONS) {
      for (const item of s.items) {
        if (item.id === id) return item;
      }
    }
    return null;
  }

  // --- SEARCH MODAL ---
  function initSearch() {
    const triggerBtn = document.getElementById('search-trigger-btn');
    const modalBackdrop = document.getElementById('search-modal');
    const inputField = document.getElementById('search-input-field');
    const resultsContainer = document.getElementById('search-results-list');

    if (triggerBtn) triggerBtn.addEventListener('click', openSearch);
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeSearch();
      });
    }

    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearch();
      }
      if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
        closeSearch();
      }
    });

    if (inputField) {
      inputField.addEventListener('input', (e) => {
        performSearch(e.target.value, resultsContainer);
      });
    }
  }

  function openSearch() {
    const modal = document.getElementById('search-modal');
    const input = document.getElementById('search-input-field');
    const results = document.getElementById('search-results-list');
    if (modal) modal.classList.add('open');
    if (input) {
      input.value = '';
      input.focus();
    }
    performSearch('', results);
  }

  function closeSearch() {
    const modal = document.getElementById('search-modal');
    if (modal) modal.classList.remove('open');
  }

  function performSearch(query, resultsContainer) {
    if (!resultsContainer) return;
    const q = query.toLowerCase().trim();

    let matches = [];
    API_SECTIONS.forEach(s => {
      s.items.forEach(item => {
        const titleEn = (item.title.en || '').toLowerCase();
        const titleTh = (item.title.th || '').toLowerCase();
        const path = (item.path || '').toLowerCase();
        const descEn = item.summary ? (item.summary.en || '').toLowerCase() : '';
        const descTh = item.summary ? (item.summary.th || '').toLowerCase() : '';

        if (!q || titleEn.includes(q) || titleTh.includes(q) || path.includes(q) || descEn.includes(q) || descTh.includes(q)) {
          matches.push(item);
        }
      });
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `<li style="padding: 1.5rem; text-align: center; color: var(--text-muted);">No results found for "${query}"</li>`;
      return;
    }

    resultsContainer.innerHTML = matches.map(item => {
      const title = item.title[currentLang] || item.title.en;
      const methodBadge = item.method 
        ? `<span class="badge-method ${item.method.toLowerCase()}">${item.method}</span>`
        : '';
      return `
        <li>
          <a href="#${item.id}" class="search-item-link" data-item-id="${item.id}">
            <div class="search-item-info">
              <span class="search-item-title">${title}</span>
              <span class="search-item-path">${item.path || ''}</span>
            </div>
            ${methodBadge}
          </a>
        </li>
      `;
    }).join('');

    resultsContainer.querySelectorAll('.search-item-link').forEach(link => {
      link.addEventListener('click', () => {
        closeSearch();
      });
    });
  }

  // --- SCROLL SPY ---
  let isManualScroll = false;
  let scrollTimeout = null;

  function initScrollSpy() {
    const links = document.querySelectorAll('.sidebar-link');
    const sections = document.querySelectorAll('.endpoint-grid, .guide-content');

    function updateActive() {
      if (isManualScroll) return;

      const threshold = 220; // Upper viewport active detection zone
      let currentSection = null;

      sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= threshold) {
          currentSection = sec;
        }
      });

      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        if (sections.length > 0) {
          currentSection = sections[sections.length - 1];
        }
      } else if (window.scrollY < 40 && sections.length > 0) {
        currentSection = sections[0];
      }

      if (currentSection) {
        const currentId = currentSection.getAttribute('id');
        links.forEach(l => {
          if (l.getAttribute('data-target') === currentId) {
            l.classList.add('active');
          } else {
            l.classList.remove('active');
          }
        });
      }
    }

    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
  }

  // --- MOBILE MENU ---
  function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('sidebar');
    if (btn && sidebar) {
      btn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });
    }
  }

  // --- UTILS ---
  function formatMarkdown(text) {
    if (!text) return '';

    // Normalize newlines
    let src = text.replace(/\r\n/g, '\n').trim();

    // Extract and replace code blocks
    const codeBlocks = [];
    src = src.replace(/```([a-z]*)\n([\s\S]*?)```/gim, (match, lang, code) => {
      const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`;
      codeBlocks.push(`<div class="code-card" style="margin: 1.25rem 0;"><div class="code-header"><span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;">${lang || 'CODE'}</span></div><div class="code-body"><pre><code>${escapeHtml(code.trim())}</code></pre></div></div>`);
      return placeholder;
    });

    // Extract and replace alert banners
    src = src.replace(/>\s*\[!(NOTE|IMPORTANT|TIP|WARNING)\]\n([\s\S]*?)(?=\n\n|\n(?=[^>])|$)/gim, (match, type, content) => {
      const cleanContent = content.replace(/^>\s?/gm, '').trim();
      const title = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
      return `<div class="alert-banner ${type.toLowerCase()}"><strong>${title}</strong><div style="margin-top:0.4rem;">${formatMarkdown(cleanContent)}</div></div>`;
    });

    // Split into lines for line-by-line parsing
    const lines = src.split('\n');
    const out = [];
    let inUl = false;
    let inOl = false;

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];

      // Check headings
      if (/^#### (.*$)/.test(line)) {
        if (inUl) { out.push('</ul>'); inUl = false; }
        if (inOl) { out.push('</ol>'); inOl = false; }
        out.push(`<h4 style="margin-top:1.25rem;margin-bottom:0.5rem;color:var(--text-primary);font-size:1rem;font-weight:600;">${parseInline(line.replace(/^#### /, ''))}</h4>`);
        continue;
      }
      if (/^### (.*$)/.test(line)) {
        if (inUl) { out.push('</ul>'); inUl = false; }
        if (inOl) { out.push('</ol>'); inOl = false; }
        out.push(`<h3 style="margin-top:1.5rem;margin-bottom:0.65rem;color:var(--text-primary);font-size:1.15rem;font-weight:700;">${parseInline(line.replace(/^### /, ''))}</h3>`);
        continue;
      }
      if (/^## (.*$)/.test(line)) {
        if (inUl) { out.push('</ul>'); inUl = false; }
        if (inOl) { out.push('</ol>'); inOl = false; }
        out.push(`<h2 style="margin-top:1.75rem;margin-bottom:0.75rem;color:var(--text-primary);font-size:1.35rem;font-weight:700;">${parseInline(line.replace(/^## /, ''))}</h2>`);
        continue;
      }
      if (/^# (.*$)/.test(line)) {
        if (inUl) { out.push('</ul>'); inUl = false; }
        if (inOl) { out.push('</ol>'); inOl = false; }
        out.push(`<h1 style="margin-bottom:1rem;color:var(--text-primary);font-size:1.6rem;font-weight:800;">${parseInline(line.replace(/^# /, ''))}</h1>`);
        continue;
      }

      // Horizontal rule
      if (/^---$/.test(line.trim())) {
        if (inUl) { out.push('</ul>'); inUl = false; }
        if (inOl) { out.push('</ol>'); inOl = false; }
        out.push('<hr style="border:none;border-top:1px solid var(--border-color);margin:1.75rem 0;">');
        continue;
      }

      // Unordered lists (- or * or ● or ○ or ■)
      const ulMatch = line.match(/^(\s*)(?:[-*•●○■])\s+(.*)$/);
      if (ulMatch) {
        if (inOl) { out.push('</ol>'); inOl = false; }
        if (!inUl) {
          out.push('<ul style="margin:0.75rem 0 0.75rem 1.5rem;line-height:1.7;color:var(--text-secondary);list-style-type:disc;">');
          inUl = true;
        }
        const indent = ulMatch[1].length;
        const content = parseInline(ulMatch[2]);
        if (indent >= 2) {
          out.push(`<li style="margin-left:1.25rem;list-style-type:circle;margin-bottom:0.35rem;">${content}</li>`);
        } else {
          out.push(`<li style="margin-bottom:0.35rem;">${content}</li>`);
        }
        continue;
      }

      // Ordered lists (1. 2. etc.)
      const olMatch = line.match(/^(\s*)\d+\.\s+(.*)$/);
      if (olMatch) {
        if (inUl) { out.push('</ul>'); inUl = false; }
        if (!inOl) {
          out.push('<ol style="margin:0.75rem 0 0.75rem 1.5rem;line-height:1.7;color:var(--text-secondary);">');
          inOl = true;
        }
        out.push(`<li style="margin-bottom:0.35rem;">${parseInline(olMatch[2])}</li>`);
        continue;
      }

      // Empty line / paragraph break
      if (line.trim() === '') {
        if (inUl) { out.push('</ul>'); inUl = false; }
        if (inOl) { out.push('</ol>'); inOl = false; }
        continue;
      }

      // Regular paragraph
      if (inUl) { out.push('</ul>'); inUl = false; }
      if (inOl) { out.push('</ol>'); inOl = false; }

      if (line.startsWith('__CODE_BLOCK_') || line.startsWith('<div')) {
        out.push(line);
      } else {
        out.push(`<p style="margin:0.6rem 0;line-height:1.7;color:var(--text-secondary);">${parseInline(line)}</p>`);
      }
    }

    if (inUl) out.push('</ul>');
    if (inOl) out.push('</ol>');

    let result = out.join('\n');

    // Restore code blocks
    codeBlocks.forEach((block, idx) => {
      result = result.replace(`__CODE_BLOCK_${idx}__`, block);
    });

    return result;
  }

  function parseInline(str) {
    if (!str) return '';
    return str
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:var(--emerald-400);text-decoration:underline;">$1</a>');
  }
})();
