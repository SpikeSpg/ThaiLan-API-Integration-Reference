/**
 * ThaiLan API Integration Reference - Interactive API Playground & Webhook Simulator
 */

import { API_METADATA } from './api-data.js';

let activeEndpoint = null;

export function initPlayground() {
  const modalBackdrop = document.getElementById('playground-modal');
  const closeBtn = document.getElementById('close-playground-btn');
  const sendBtn = document.getElementById('pg-send-request-btn');

  if (closeBtn) {
    closeBtn.addEventListener('click', closePlayground);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closePlayground();
      }
    });
  }

  if (sendBtn) {
    sendBtn.addEventListener('click', executePlaygroundRequest);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closePlayground();
    }
  });
}

export function openPlayground(endpointData, currentLang = 'en') {
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

  // Clear previous response
  responseCodeEl.textContent = '// Click "Send Request" to test endpoint';
  responseStatusEl.textContent = 'Ready';
  responseStatusEl.className = 'response-status-badge';

  // Build dynamic form
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

export function closePlayground() {
  const modal = document.getElementById('playground-modal');
  if (modal) modal.classList.remove('open');
}

async function executePlaygroundRequest() {
  const responseCodeEl = document.getElementById('pg-response-code');
  const responseStatusEl = document.getElementById('pg-response-status');
  const sendBtn = document.getElementById('pg-send-request-btn');

  if (!activeEndpoint) return;

  sendBtn.disabled = true;
  sendBtn.textContent = 'Sending Request...';
  responseStatusEl.textContent = 'Pending...';

  // Simulate network round-trip & show mock or live response
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
