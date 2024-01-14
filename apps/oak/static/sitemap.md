```mermaid

graph TD

    Login["Login Screen"] --> app["User-side App"] & vendor["Vendor-side App"]
    
    app --> contracts["Contract management"]
    contracts --> contract_repo["Contract repository"]
    contract_repo --> contract_table["Contract table"]
    contract_repo --> filterby["Search & Filter by XYZ"]
    contract_table --> modify_contract["Click row for ACTIONS"]
    contracts --> contract_entry["Contract entry form"] 
    pending_contract_approvals --> approve_contract["Approve contract + MODIFY"] & reject_contract["Reject contract"]
    contracts --> contract_report["Contract report"]

    app --> bills["Bill management"]

    app --> approvals["Pending approvals"]
    approvals --> pending_contract_approvals["Pending contract approvals"]
    app --> account["Account settings"]
    app --> payment["Payment"]
    payment --> cycle["Select Payment cycle"]
    cycle --> checkout["Go to Stripe checkout"]

```

## CONTRACT COLUMNS:

## CONTRACT ROW ACTIONS:

| Actions | Description |
|---------|-------------|
| MODIFY  |             |
| DELETE  |             |
| VIEW    | maybe some in-depth info  |
| ADD_CHILD |           |
| PAY?    |  should contract be billed from here?|


## ACCOUNT SETTINGS:

| Field              | Description                           |
|--------------------|---------------------------------------|
| Company code       | Unique ID for the company      |
| Name               | Username/first-name of the user        |
| Email              | Email address of the company           |
| Password           | Password for the user (stars unless otherwise)  |
| User ID            | Immutable user ID                      |
| Approval threshold | Threshold for single-amount contract approvals       |
| Approver           | User responsible for approving this user's contracts |
| Approvees          | List of users this user is responsible for approving |
```