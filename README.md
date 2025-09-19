# WhatsApp Web Clone 💬

A fully functional WhatsApp Web clone built with vanilla HTML, CSS, and JavaScript. This project replicates the core features and user interface of WhatsApp Web with a modern, responsive design.

## 🚀 Live Demo

Open `index.html` in your browser or run a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## ✨ Features

### Core Messaging
- ✅ **Real-time chat interface** - Send and receive messages instantly
- ✅ **Message status indicators** - Single/double checkmarks for sent/delivered/read
- ✅ **Emoji support** - Built-in emoji picker with popular emojis
- ✅ **Message timestamps** - Accurate time display for all messages
- ✅ **Auto-scroll** - Automatic scrolling to latest messages

### Chat Management
- ✅ **Multiple chat contacts** - Switch between different conversations
- ✅ **Group chats** - Support for group conversations with participant count
- ✅ **Unread message badges** - Visual indicators for unread messages
- ✅ **Last message preview** - Shows latest message in chat list
- ✅ **Active chat highlighting** - Visual indication of current chat

### User Interface
- ✅ **Authentic WhatsApp design** - Pixel-perfect recreation of WhatsApp Web
- ✅ **Dark theme** - Modern dark color scheme
- ✅ **Responsive design** - Works on desktop and mobile devices
- ✅ **Smooth animations** - Fade-in effects for messages and interactions
- ✅ **Custom avatars** - Colorful SVG avatars for each contact

### Advanced Features
- ✅ **Search functionality** - Search through contacts and conversations
- ✅ **File attachments** - Support for file uploads (simulated)
- ✅ **Voice messages** - Voice recording interface (UI only)
- ✅ **Video/voice calls** - Call buttons with alerts (UI only)
- ✅ **Online status** - Shows contact online/offline status
- ✅ **Typing indicators** - Shows when users are typing

## 🛠️ Technology Stack

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox/Grid, animations, and responsive design
- **Vanilla JavaScript** - ES6+ features, no external dependencies
- **SVG** - Scalable vector graphics for avatars and icons

## 📱 Screenshots

### Welcome Screen
![Welcome Screen](https://github.com/user-attachments/assets/a3f4c2af-f820-44cd-a4e3-7bc056aabd61)

### Individual Chat
![Chat Interface](https://github.com/user-attachments/assets/a64320b9-7295-4598-8214-db422670a02b)

### Group Chat
![Group Chat](https://github.com/user-attachments/assets/0cd1a91a-12a0-4fc3-85dd-c120fe351877)

## 🏗️ Project Structure

```
WhatsApp/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 💻 Key Components

### HTML Structure
- **Sidebar**: Contact list, search, and user profile
- **Main Chat Area**: Welcome screen and chat interface
- **Message Input**: Text input, emoji picker, and action buttons

### CSS Features
- **CSS Variables**: Easy theme customization
- **Flexbox Layout**: Responsive chat interface
- **Custom Scrollbars**: Styled scrollbars for better UX
- **Media Queries**: Mobile-responsive design
- **Animations**: Smooth transitions and hover effects

### JavaScript Functionality
- **Message Management**: Send, receive, and display messages
- **Contact Switching**: Dynamic chat loading
- **Search Filter**: Real-time contact filtering
- **Emoji Picker**: Interactive emoji selection
- **File Handling**: Attachment simulation
- **Auto-replies**: Simulated conversation responses

## 🎯 Implemented Features

- [x] Sidebar with contact list
- [x] Chat interface with message display
- [x] Message input and send functionality
- [x] Real-time messaging simulation
- [x] Emoji picker
- [x] Search functionality
- [x] Group chat support
- [x] Message status indicators
- [x] File attachment interface
- [x] Voice message UI
- [x] Video/voice call buttons
- [x] Responsive design
- [x] Dark theme
- [x] Contact avatars
- [x] Online status indicators
- [x] Typing indicators
- [x] Auto-scroll to new messages
- [x] Message timestamps

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd WhatsApp
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for best results

3. **Start chatting**
   - Click on any contact to start a conversation
   - Send messages using the input field
   - Try the emoji picker and search functionality

## 🔧 Customization

### Adding New Contacts
Edit the `contacts` array in `script.js`:

```javascript
this.contacts = [
    {
        id: 7,
        name: 'New Contact',
        avatar: 'data:image/svg+xml,...',
        lastMessage: 'Hello there!',
        time: 'now',
        unread: 0,
        online: true,
        status: 'online'
    }
];
```

### Changing Theme Colors
Modify CSS variables in `styles.css`:

```css
:root {
    --primary-bg: #111b21;
    --secondary-bg: #202c33;
    --accent-color: #00a884;
    --text-primary: #e9edef;
}
```

### Adding New Features
The codebase is modular and easy to extend:
- Add new methods to the `WhatsAppWeb` class
- Create new UI components in HTML
- Style them with CSS
- Bind events in the `bindEvents()` method

## 🌟 Future Enhancements

- [ ] Real WebSocket integration for live messaging
- [ ] User authentication and profiles
- [ ] Message encryption
- [ ] File upload and sharing
- [ ] Voice message recording
- [ ] Video calling integration
- [ ] Push notifications
- [ ] Message reactions
- [ ] Story/Status features
- [ ] Chat backup and export
- [ ] Multiple device sync
- [ ] Custom themes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes and demonstration of web development skills. Not intended for commercial use.

## 🙏 Acknowledgments

- WhatsApp for the original design inspiration
- Font Awesome for icon concepts
- The web development community for best practices

---

Built with ❤️ using vanilla web technologies