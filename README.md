# Electron React Todo Manager

A modern, cross-platform desktop todo list application built with Electron and React. Features a clean, intuitive interface with real-time file system integration for persistent storage.

![Todo List App Screenshot](https://github.com/user-attachments/assets/77dd0c02-18d8-4491-9c20-f87fe39a0eec)
![Todo List App Screenshot](https://github.com/user-attachments/assets/394f4bab-88e9-46cc-8055-adcc80a043a0)
![Todo List App Screenshot](https://github.com/user-attachments/assets/9ff17130-5994-4362-b1e8-a79f46f99cbf)

## Features

- 🚀 Cross-platform desktop application (Windows, macOS, Linux)
- 💾 Persistent storage using local file system
- 🎨 Modern and responsive UI with clean animations
- ⚡ Real-time updates and file synchronization
- ⚙️ Configurable storage location through settings
- 🔄 Edit and delete confirmation workflows
- ✅ Task completion tracking
- 🎯 Intuitive task management interface

## Technologies Used

- **Electron** - Cross-platform desktop application framework
- **React** - UI component library
- **electron-store** - Settings persistence
- **electron-builder** - Application packaging and distribution

## Installation

1. Clone the repository:

```bash
git clone https://github.com/HusseinFarqad/electron-react-todo-manager.git
```

2. Install dependencies:

```bash
cd electron-react-todo-manager
npm install
```

3. Run the application in development mode:

```bash
npm run electron-dev
```

4. Build the application:

```bash
npm run electron-pack
```

## Development Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Available Scripts

- `npm run electron-dev` - Run the application in development mode
- `npm run build` - Build the React application
- `npm run electron-pack` - Package the application for distribution
- `npm test` - Run the test suite

## Project Structure

```
electron-react-todo-manager/
├── public/
│   ├── electron.js
│   └── preload.js
├── src/
│   ├── components/
│   │   ├── TodoList.js
│   │   ├── TodoItem.js
│   │   ├── Settings.js
│   │   └── ...
│   ├── App.js
│   └── index.js
└── package.json
```

## Features in Detail

### Task Management

- Create, edit, and delete tasks
- Mark tasks as complete/incomplete
- Confirmation dialog for task deletion
- Real-time task updates

### Storage

- Local file system integration
- Configurable storage location
- Automatic file handling and error recovery
- JSON-based data persistence

### Settings

- Customizable default storage location
- User preferences persistence
- Easy-to-use settings interface

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Hussein Farqad - [husseinfarqued@gmail.com](mailto:husseinfarqued@gmail.com)

Project Link: [https://github.com/HusseinFarqad/electron-react-todo-manager](https://github.com/HusseinFarqad/electron-react-todo-manager)
