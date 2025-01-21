# User Management Dashboard

This project is a User Management Dashboard built using React.js. It allows you to perform CRUD (Create, Read, Update, Delete) operations for managing user data effectively.

## Features
- Add new users.
- Edit existing user information.
- Delete users from the dashboard.
- Responsive design for seamless usage across devices.

## Setup and Run Instructions
### Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (v14 or above)
- **npm** (v6 or above)
- **Git**

### Steps to Clone and Run
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-username>/user-management-dashboard.git
   cd user-management-dashboard
   ```

2. **Install Dependencies**:
   Run the following command to install all necessary dependencies:
   ```bash
   npm install
   ```

3. **Start the Application**:
   Start the development server by running:
   ```bash
   npm start
   ```

4. **Access the Dashboard**:
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```
   
## Challenges Faced
1. **Handling State Management**:
   - Ensuring that the edit functionality pre-filled the form with the correct data was tricky.
   - Solution: Leveraged React state and `useEffect` hooks to dynamically update the form when a user was selected for editing.

2. **Git Handling**:
   - Accidentally tried to push `node_modules` to the repository, which was ignored due to `.gitignore`.
   - Solution: Excluded `node_modules` and ensured proper dependency management with `npm install`.

3. **Local Setup Errors**:
   - Encountered the `'react-scripts' is not recognized` error during setup.
   - Solution: Fixed by running `npm install` to resolve missing dependencies.

4. **Styling Consistency**:
   - Ensured the dashboard followed a professional and consistent theme across components.

## Improvements to Make with More Time
1. **Backend Integration**:
   - Replace the mock API with a live backend to persist user data.
2. **Authentication**:
   - Add user authentication and authorization for enhanced security.
3. **Advanced Features**:
   - Implement search, sort, and filter functionalities for better user management.
4. **Unit Testing**:
   - Add comprehensive unit tests to ensure code reliability.

## Project Structure
```
user-management-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── UserForm.jsx
│   │   └── UserList.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Technologies Used
- **React.js** for building the UI.
- **JavaScript (ES6)** for application logic.
- **CSS** for styling the components.

