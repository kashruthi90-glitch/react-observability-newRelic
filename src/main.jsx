import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent';

// Remaining import statements

const options = {
  "info": {
    "applicationID": 601637732,
    "beacon": "bam.nr-data.net",
    "errorBeacon": "bam.nr-data.net",
    "licenseKey": "NRJS-a375c1168c7cd275a0a",
    "sa": 1
  },
  "init": {
    "ajax": {
      "deny_list": [
        "bam.nr-data.net"
      ]
    },
    "browser_consent_mode": {
      "enabled": false
    },
    "distributed_tracing": {
      "enabled": true
    },
    "performance": {
      "capture_detail": false,
      "capture_marks": false,
      "capture_measures": true
    },
    "privacy": {
      "cookies_enabled": true
    }
  },
  "loader_config": {
    "accountID": 7956890,
    "agentID": 601637732,
    "applicationID": 601637732,
    "licenseKey": "NRJS-a375c1168c7cd275a0a",
    "trustKey": 7956890
  }
}

// The agent loader code executes immediately on instantiation.
const nrba = new BrowserAgent(options)

// Remaining code

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>,
)
