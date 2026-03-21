<div align="center">

# ⚙️ PLM Flow — Central Backend Engine
**Enterprise Node.js Architecture for Fault-Tolerant Data Operations**

[![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg?style=flat-square&logo=nodedotjs)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-black.svg?style=flat-square&logo=express)](https://expressjs.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-ODM-880000.svg?style=flat-square&logo=mongoose)](https://mongoosejs.com/)
[![JWT Auth](https://img.shields.io/badge/JSON_Web_Tokens-Security-000000.svg?style=flat-square&logo=json-web-tokens)](https://jwt.io/)

*Building an unshakeable foundation for engineering data.*

</div>

---

## 🏗️ Core Responsibilities

The PLM Backend isn't just an API—it is a sophisticated State Machine protecting the integrity of hardware lifecycle data. It is responsible for:
- 🔐 **Strict Role Validation:** Resolving authorization barriers (`Admin`, `Engineering User`, `Approver`, `Operations User`) at the middleware level before database operations execute.
- ⚡ **Dynamic Auto-Failover Dual-DB Layer:** Synchronizing and managing live connections between **Supabase PostgreSQL** (Primary) and **MongoDB Atlas** (Secondary). Total fault tolerance.
- 🕒 **SLA Algorithmic Engine:** Constantly tracking state and time variables (`enteredAt`, `escalated`, `warningThresholds`) for Engineering Change Orders (ECO).

## 🗄️ Database Architecture

We have engineered a robust `dbQuery()` abstraction layer enabling multi-database writes. 
Every 10 seconds, `src/config/database.js` runs a health ping. If Supabase drops packets, MongoDB instantly takes the primary write-load. No restarting. No dropped requests. Total sync integrity via `deletedAt` and `syncVersion` vector clocks.

## 🚀 Environment Initialization

1. Construct the environment variables file (`.env`):
```env
PORT=5000
MONGODB_URI=your_atlas_connection_string
DATABASE_URL=your_supabase_pg_connection_string
JWT_SECRET=super_secret_cryptographic_key
```

2. Boot the cluster:
```bash
npm install
npm run dev
# Watch the console output for multi-database handshake confirmation!
```

---

## 📜 Proprietary Notice

<div align="center">

**© 2026 PLM Flow Backend Systems. All Rights Reserved.**

*The auto-failover configurations, vector clock synchronization models, and stage-transition validations constructed within this backend module represent private engineering assets. Unlawful distribution of this proprietary Node.js architecture is an offense.*

</div>
