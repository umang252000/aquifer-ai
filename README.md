# Aquifer AI

<img width="1536" height="1024" alt="2" src="https://github.com/user-attachments/assets/c16c6b64-4a9f-417e-a1a9-07cfac6720b9" />

## Autonomous Procurement Web Agent

Aquifer AI is an autonomous AI agent that performs procurement operations across supplier marketplaces by navigating the live web.

Instead of procurement teams manually searching supplier websites, comparing vendors, and placing orders, Aquifer AI performs the entire workflow automatically.

Built using TinyFish Web Agent infrastructure, Aquifer AI demonstrates how AI agents can perform real work on the internet.

---

## Problem

Procurement teams spend a significant amount of time performing repetitive web tasks such as:

• searching supplier marketplaces  
• comparing vendor prices  
• verifying supplier reliability  
• evaluating delivery timelines  
• placing purchase orders  

This process is slow, error-prone, and requires navigating multiple websites manually.

For manufacturing companies, hardware startups, and supply chain teams, procurement can take hours per request.

The web contains the necessary supplier information, but it is fragmented across multiple platforms and designed for human interaction rather than autonomous systems.

---

## Solution

Aquifer AI is an autonomous procurement agent that transforms the web into an executable workflow.

The AI agent:

searches supplier marketplaces

extracts vendor listings

analyzes supplier options

selects the optimal vendor

places procurement orders automatically

The system uses an AI-driven decision engine combined with web automation agents that interact with real supplier platforms.

---

## Key Features

### Autonomous Web Navigation

Aquifer AI navigates supplier marketplaces automatically using browser automation and web agents.

Supported platforms include:

• IndiaMART  
• Alibaba  
• Amazon Business  

The agent searches products and extracts supplier data directly from live web pages.

---

### Supplier Intelligence Engine

Aquifer AI analyzes suppliers based on multiple parameters:

• product price  
• supplier rating  
• delivery time  

A scoring algorithm determines the best vendor for procurement.

---

### Automated Order Execution

After selecting the optimal supplier, the system generates and executes a procurement order automatically.

This simulates a real-world purchasing workflow.

---

### Procurement Analytics Dashboard

The platform provides procurement insights including:

• number of suppliers analyzed  
• average market price  
• best vendor price  
• estimated cost savings  

This enables procurement teams to make data-driven sourcing decisions.

---

### AI Workflow Visualization

The dashboard displays the AI agent workflow in real time:

• searching supplier websites  
• extracting vendor listings  
• comparing suppliers  
• placing orders  

This demonstrates the autonomous capabilities of the system.

---

## Architecture

<img width="1536" height="1024" alt="3" src="https://github.com/user-attachments/assets/ff93440d-bf41-40ef-88dd-bce30846496e" />

Aquifer AI uses a modular AI agent architecture.

```
Frontend (Next.js + Tailwind)
        ↓
Backend API (FastAPI)
        ↓
Agent Controller
        ↓
Supplier Agents
        ↓
Decision Engine
        ↓
Order Execution Agent
        ↓
Procurement Analytics
```

---

## Technology Stack

### Frontend

• Next.js  
• TailwindCSS  

### Backend

• FastAPI  
• Python  

### Web Automation

• TinyFish Web Agent API  
• Playwright  

### Database

• MongoDB  

### Other Tools

• Axios  
• Node.js  

---

## Agent System Design

Aquifer AI is built using multiple specialized agents.

### Supplier Agents

Each supplier platform is handled by a dedicated web agent.

These agents:

• navigate supplier websites  
• perform product searches  
• extract vendor listings  

---

### Decision Engine

The decision engine evaluates suppliers using a scoring function.

Example scoring model:

Vendor Score = Price + Delivery Time − (Rating × Weight)

The supplier with the best score is selected.

---

### Order Execution Agent

Once the optimal supplier is identified, the system generates a procurement order and confirms the purchase workflow.

---

### Procurement Analytics Engine

Supplier data is analyzed to generate procurement insights and cost-saving metrics.

---

## Demo Workflow

The demo shows a complete procurement process executed by the AI agent.

User enters product request

AI agent searches supplier websites

Supplier listings are extracted

Vendor comparison table is generated

Best supplier is selected

Order is automatically placed

Procurement insights are displayed

This demonstrates how AI agents can perform real operational tasks on the web.

---

## Running the Project

### Backend Setup

```
cd aquifer-backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend will run on:

```
http://localhost:8000
```

---

### Frontend Setup

```
cd aquifer-frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:3000
```

Open the dashboard and enter a procurement request to start the AI agent.

---

## Example Procurement Request

Example input:

Product: Industrial Bearings  
Quantity: 500  

The AI agent will:

• search supplier websites  
• analyze vendor options  
• select the best supplier  
• place the order automatically  

---

## Business Impact

Procurement automation represents a multi-billion dollar opportunity.

Companies across manufacturing, hardware, and supply chain industries spend significant time sourcing suppliers.

Aquifer AI reduces procurement effort from hours to seconds, enabling organizations to automate supplier discovery and purchasing workflows.

Potential customers include:

• manufacturing companies  
• hardware startups  
• supply chain teams  
• industrial procurement departments  

---

## Why This Matters

The web is full of business processes that still require manual interaction.

Aquifer AI demonstrates how autonomous web agents can transform the internet into an executable environment for AI systems.

Instead of humans performing repetitive web tasks, AI agents can now perform them autonomously.

---

## Future Roadmap

Planned features include:

• ERP system integration  
• automated RFQ generation  
• supplier negotiation agents  
• procurement forecasting  
• supply chain intelligence dashboards  

Aquifer AI can evolve into a full AI-powered procurement automation platform.


## Instructions

### 1. Clone the Repository
- git clone https://github.com/umang252000/aquifer-ai.git
- "cd aquifer-ai"

### 2. Backend Setup
- Navigate to the backend folder.
- "cd aquifer-backend"

- Install Python dependencies.
- "pip install -r requirements.txt"

- Install Playwright browsers.
- "playwright install"

- Start the backend server.
- "uvicorn main:app --reload"

- The backend API will start at:
- "http://localhost:8000"

- You can access the API documentation at:
- "http://localhost:8000/docs"

### 3. Frontend Setup
- Open a new terminal and navigate to the frontend folder.
- "cd aquifer-frontend"

- Install frontend dependencies.
- "npm install"

- Start the frontend development server.
- "npm run dev"

- The frontend dashboard will run at:
- "http://localhost:3000"

### 4. Running the Application

- 1.Open the dashboard in your browser:
- "http://localhost:3000"

- 2.Enter a procurement request such as:
- "Product: Industrial Bearings"
- "Quantity: 500"

- Click Start AI Procurement.

### 5. AI Agent Workflow
Once the request is submitted, Aquifer AI performs the following automated workflow:

- 1.The AI agent searches supplier marketplaces.
- 2.Vendor listings are extracted from supplier websites.
- 3.The system analyzes suppliers based on price, rating, and delivery time.
- 4.The decision engine selects the optimal supplier.
- 5.The order execution agent generates a procurement order.
- 6.Procurement insights are displayed on the dashboard.

### 6. Expected Output
The dashboard will display:

- • Supplier comparison table
- • AI workflow activity logs
- • Order confirmation
- • Procurement insights analytics

This demonstrates how the AI agent autonomously performs procurement operations across the web.

### 7. Demo Scenario

- Example procurement request:
- "Product: Industrial Bearings"
- "Quantity: 500"

#### Aquifer AI will:

- 1.search supplier websites
- 2.extract vendor listings
- 3.compare suppliers
- 4.select the best vendor
- 5.place the procurement order automatically
