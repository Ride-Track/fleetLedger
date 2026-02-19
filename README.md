
## FleetLedger: A Driver & Vehicle Inventory Management System
A modern asset accountability platform for managing organizational drivers and vehicles, designed with a hybrid architecture that combines traditional web infrastructure with blockchain-based verification for auditability and trust.

### Overview
This system replaces manual, paper-based fleet tracking with a secure, searchable, and role-aware web application.
It enables organizations to manage driver identities, vehicle lifecycle states, and operational assignments while maintaining verifiable records of critical actions.
The platform is designed to be:
Operationally simple for administrators and employees
Cryptographically verifiable for audits and compliance
Modular and extensible for future automation workflows
Responsive across desktop and mobile environments

### Architecture
The system follows a three-layer structure:
/frontend   → User interface and dashboards
/backend    → API, business logic, authentication, data layer
/contract   → Soroban smart contracts for verification workflows

This separation ensures the application remains maintainable while allowing blockchain features to evolve independently from the core system.

### Technology Stack
Layer
Technology
Frontend
Next.js (TypeScript, App Router)
Backend
NestJS
Database
PostgreSQL
ORM
TypeORM
Blockchain Layer
Soroban Smart Contracts
Auth & Security
JWT + Role-Based Access Control
Storage
Cloud object storage (for vehicle images & documents)


### Key Features
Driver Management
Create and maintain comprehensive driver profiles
Track employment lifecycle and assignments
Maintain searchable digital records
Vehicle Inventory
Register vehicles with metadata and images
Track operational status (Active, Inactive, Decommissioned)
Maintain assignment relationships between drivers and vehicles
Role-Based Access
Admin Users
Full CRUD access to drivers, vehicles, and users
Activity monitoring and system configuration
Employees
Read-only visibility into operational data
Search and filter capabilities
Search & Operational Visibility
Real-time filtering across drivers, vehicles, and locations
Structured dashboards with system summaries
Mobile-responsive UI for field access
Audit & Verification Layer
Selective operational events can be anchored through Soroban contracts to create:
Tamper-evident activity proofs
Verifiable change history
Independent validation of key lifecycle actions

### Project Structure
root/
│
├── frontend/               # Next.js application
│   ├── app/
│   ├── components/
│   ├── hooks/
│   └── services/
│
├── backend/                # NestJS API
│   ├── src/
│   │   ├── modules/
│   │   │   ├── accounts/
│   │   │   ├── drivers/
│   │   │   ├── vehicles/
│   │   │   └── audits/
│   │   ├── config/
│   │   └── main.ts
│   └── test/
│
├── contract/               # Soroban smart contracts
│   ├── src/
│   ├── tests/
│   └── Cargo.toml
│
└── docker-compose.yml


### Data Model Highlights
Users → authenticated system participants
Drivers → personnel records tied to operational assignments
Vehicles → managed assets with lifecycle states
Assignments → relational mapping between drivers and vehicles
Activity Logs → traceable operational events
Verification Events → optional contract-backed attestations

### Getting Started
Prerequisites
Node.js ≥ 18
PostgreSQL ≥ 14
Rust toolchain (for Soroban contracts)
Docker (optional but recommended)

### Backend Setup
cd backend
npm install
cp .env.example .env
npm run start:dev


### Frontend Setup
cd frontend
npm install
npm run dev


### Contract Setup
cd contract
cargo build
soroban contract deploy ...


### Environment Variables (Backend)
DATABASE_URL=postgresql://user:password@localhost:5432/fleet
JWT_SECRET=change_me
STELLAR_RPC_URL=...
CONTRACT_ID=...


### Design Principles
Separation of concerns between application logic and verification logic
Progressive decentralization — blockchain used where trust matters, not everywhere
Operational familiarity — users interact with a standard web system
Extensibility — contracts can support future automation without redesign

### Future Extensions
Maintenance scheduling workflows
Automated compliance attestations
Multi-organization interoperability
Tokenized asset representations
Event-triggered contract execution

License
MIT License — open for adaptation and institutional deployment.

Contributing
Fork the repository
Create a feature branch
Follow linting and test requirements
Submit a PR with clear context and validation steps

This project demonstrates how conventional infrastructure software can evolve into a verifiable, interoperable system without sacrificing usability or performance.

