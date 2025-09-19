// WhatsApp Web Clone JavaScript

class WhatsAppWeb {
    constructor() {
        this.currentChatId = null;
        this.contacts = [];
        this.messages = {};
        this.isEmojiPickerOpen = false;
        this.typingTimeout = null;
        
        this.init();
        this.loadSampleData();
        this.bindEvents();
    }

    init() {
        this.elements = {
            chatList: document.getElementById('chatList'),
            welcomeScreen: document.getElementById('welcomeScreen'),
            chatInterface: document.getElementById('chatInterface'),
            contactName: document.getElementById('contactName'),
            contactStatus: document.getElementById('contactStatus'),
            contactPic: document.getElementById('contactPic'),
            messages: document.getElementById('messages'),
            messageInput: document.getElementById('messageInput'),
            sendBtn: document.getElementById('sendBtn'),
            emojiBtn: document.getElementById('emojiBtn'),
            emojiPicker: document.getElementById('emojiPicker'),
            searchInput: document.getElementById('searchInput'),
            voiceBtn: document.getElementById('voiceBtn'),
            attachBtn: document.getElementById('attachBtn')
        };
    }

    loadSampleData() {
        this.contacts = [
            {
                id: 1,
                name: 'Alice Johnson',
                avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Crect width='50' height='50' fill='%23ff6b6b'/%3E%3Ctext x='25' y='30' text-anchor='middle' fill='white' font-family='Arial' font-size='16'%3EAJ%3C/text%3E%3C/svg%3E",
                lastMessage: 'Hey! How are you doing?',
                time: '12:30 PM',
                unread: 2,
                online: true,
                status: 'online'
            },
            {
                id: 2,
                name: 'Bob Smith',
                avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Crect width='50' height='50' fill='%234ecdc4'/%3E%3Ctext x='25' y='30' text-anchor='middle' fill='white' font-family='Arial' font-size='16'%3EBS%3C/text%3E%3C/svg%3E",
                lastMessage: 'Can we meet tomorrow?',
                time: '11:45 AM',
                unread: 0,
                online: false,
                status: 'last seen 2 hours ago'
            },
            {
                id: 3,
                name: 'Charlie Brown',
                avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Crect width='50' height='50' fill='%2345b7d1'/%3E%3Ctext x='25' y='30' text-anchor='middle' fill='white' font-family='Arial' font-size='16'%3ECB%3C/text%3E%3C/svg%3E",
                lastMessage: 'Thanks for the help!',
                time: 'Yesterday',
                unread: 0,
                online: false,
                status: 'last seen yesterday at 3:15 PM'
            },
            {
                id: 4,
                name: 'Diana Prince',
                avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Crect width='50' height='50' fill='%23f7b731'/%3E%3Ctext x='25' y='30' text-anchor='middle' fill='white' font-family='Arial' font-size='16'%3EDP%3C/text%3E%3C/svg%3E",
                lastMessage: 'Great job on the project!',
                time: 'Yesterday',
                unread: 1,
                online: true,
                status: 'online'
            },
            {
                id: 5,
                name: 'Family Group',
                avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Crect width='50' height='50' fill='%235f27cd'/%3E%3Ctext x='25' y='30' text-anchor='middle' fill='white' font-family='Arial' font-size='16'%3EFG%3C/text%3E%3C/svg%3E",
                lastMessage: 'Mom: Dinner at 7 PM',
                time: '2:30 PM',
                unread: 3,
                online: false,
                status: '5 participants',
                isGroup: true
            },
            {
                id: 6,
                name: 'Work Team',
                avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Crect width='50' height='50' fill='%2300d2d3'/%3E%3Ctext x='25' y='30' text-anchor='middle' fill='white' font-family='Arial' font-size='16'%3EWT%3C/text%3E%3C/svg%3E",
                lastMessage: 'Meeting scheduled for Monday',
                time: '1:15 PM',
                unread: 0,
                online: false,
                status: '12 participants',
                isGroup: true
            }
        ];

        // Sample messages for each contact
        this.messages = {
            1: [
                { id: 1, text: 'Hi there! How have you been?', sent: false, time: '12:25 PM', status: 'read' },
                { id: 2, text: 'I\'m doing great, thanks for asking!', sent: true, time: '12:26 PM', status: 'read' },
                { id: 3, text: 'How about you? Any exciting plans for the weekend?', sent: true, time: '12:27 PM', status: 'read' },
                { id: 4, text: 'Yes! Planning to go hiking. Want to join?', sent: false, time: '12:28 PM', status: 'read' },
                { id: 5, text: 'That sounds amazing! Count me in 🏔️', sent: true, time: '12:29 PM', status: 'delivered' },
                { id: 6, text: 'Hey! How are you doing?', sent: false, time: '12:30 PM', status: 'delivered' }
            ],
            2: [
                { id: 1, text: 'Hey Bob! What\'s up?', sent: true, time: '11:40 AM', status: 'read' },
                { id: 2, text: 'Not much, just working on some projects', sent: false, time: '11:42 AM', status: 'read' },
                { id: 3, text: 'Can we meet tomorrow?', sent: false, time: '11:45 AM', status: 'delivered' }
            ],
            3: [
                { id: 1, text: 'Charlie, I sent you the files you needed', sent: true, time: 'Yesterday 2:30 PM', status: 'read' },
                { id: 2, text: 'Perfect! Let me check them out', sent: false, time: 'Yesterday 2:45 PM', status: 'read' },
                { id: 3, text: 'Thanks for the help!', sent: false, time: 'Yesterday 3:15 PM', status: 'read' }
            ],
            4: [
                { id: 1, text: 'Diana, the presentation is ready', sent: true, time: 'Yesterday 4:00 PM', status: 'read' },
                { id: 2, text: 'Excellent work! Really impressed', sent: false, time: 'Yesterday 4:15 PM', status: 'read' },
                { id: 3, text: 'Great job on the project!', sent: false, time: 'Yesterday 4:20 PM', status: 'read' }
            ],
            5: [
                { id: 1, text: 'Dad: Who\'s bringing dessert?', sent: false, time: '1:00 PM', status: 'read' },
                { id: 2, text: 'I can bring the cake!', sent: true, time: '1:15 PM', status: 'read' },
                { id: 3, text: 'Sister: I\'ll bring ice cream', sent: false, time: '2:00 PM', status: 'read' },
                { id: 4, text: 'Mom: Dinner at 7 PM', sent: false, time: '2:30 PM', status: 'delivered' }
            ],
            6: [
                { id: 1, text: 'Good morning team!', sent: true, time: '9:00 AM', status: 'read' },
                { id: 2, text: 'John: Morning! Ready for the week', sent: false, time: '9:15 AM', status: 'read' },
                { id: 3, text: 'Sarah: Let\'s crush those goals!', sent: false, time: '9:30 AM', status: 'read' },
                { id: 4, text: 'Meeting scheduled for Monday', sent: false, time: '1:15 PM', status: 'delivered' }
            ]
        };

        this.renderChatList();
    }

    bindEvents() {
        // Send message
        this.elements.sendBtn.addEventListener('click', () => this.sendMessage());
        this.elements.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        // Emoji picker
        this.elements.emojiBtn.addEventListener('click', () => this.toggleEmojiPicker());

        // Search functionality
        this.elements.searchInput.addEventListener('input', (e) => this.searchChats(e.target.value));

        // Voice message (placeholder)
        this.elements.voiceBtn.addEventListener('click', () => this.handleVoiceMessage());

        // Attach file (placeholder)
        this.elements.attachBtn.addEventListener('click', () => this.handleAttachment());

        // Typing indicator
        this.elements.messageInput.addEventListener('input', () => this.handleTyping());

        // Video and voice call buttons
        document.getElementById('videoChatBtn').addEventListener('click', () => this.startVideoCall());
        document.getElementById('voiceChatBtn').addEventListener('click', () => this.startVoiceCall());

        // Close emoji picker when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.elements.emojiPicker.contains(e.target) && !this.elements.emojiBtn.contains(e.target)) {
                this.closeEmojiPicker();
            }
        });
    }

    renderChatList() {
        this.elements.chatList.innerHTML = '';
        
        this.contacts.forEach(contact => {
            const chatItem = document.createElement('div');
            chatItem.className = 'chat-item';
            chatItem.dataset.contactId = contact.id;
            
            chatItem.innerHTML = `
                <img src="${contact.avatar}" alt="${contact.name}" class="chat-avatar">
                <div class="chat-details">
                    <div class="chat-name">${contact.name}</div>
                    <div class="chat-last-message">${contact.lastMessage}</div>
                </div>
                <div class="chat-meta">
                    <div class="chat-time">${contact.time}</div>
                    ${contact.unread > 0 ? `<div class="chat-badge">${contact.unread}</div>` : ''}
                </div>
            `;
            
            chatItem.addEventListener('click', () => this.openChat(contact.id));
            this.elements.chatList.appendChild(chatItem);
        });
    }

    openChat(contactId) {
        this.currentChatId = contactId;
        const contact = this.contacts.find(c => c.id === contactId);
        
        if (!contact) return;

        // Update active chat in sidebar
        document.querySelectorAll('.chat-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-contact-id="${contactId}"]`).classList.add('active');

        // Hide welcome screen and show chat interface
        this.elements.welcomeScreen.style.display = 'none';
        this.elements.chatInterface.style.display = 'flex';

        // Update chat header
        this.elements.contactName.textContent = contact.name;
        this.elements.contactStatus.textContent = contact.status;
        this.elements.contactPic.src = contact.avatar;

        // Clear unread messages
        contact.unread = 0;
        this.renderChatList();

        // Load and display messages
        this.loadMessages(contactId);
    }

    loadMessages(contactId) {
        const chatMessages = this.messages[contactId] || [];
        this.elements.messages.innerHTML = '';

        chatMessages.forEach(message => {
            this.displayMessage(message);
        });

        // Scroll to bottom
        this.scrollToBottom();
    }

    displayMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.sent ? 'sent' : 'received'}`;
        
        const statusIcon = message.sent ? this.getStatusIcon(message.status) : '';
        
        messageDiv.innerHTML = `
            <div class="message-bubble">
                <div class="message-text">${message.text}</div>
                <div class="message-time">
                    ${message.time}
                    ${statusIcon}
                </div>
            </div>
        `;
        
        this.elements.messages.appendChild(messageDiv);
    }

    getStatusIcon(status) {
        switch (status) {
            case 'sent':
                return '<i class="fas fa-check message-status"></i>';
            case 'delivered':
                return '<i class="fas fa-check-double message-status"></i>';
            case 'read':
                return '<i class="fas fa-check-double message-status" style="color: #53bdeb;"></i>';
            default:
                return '';
        }
    }

    sendMessage() {
        const messageText = this.elements.messageInput.value.trim();
        
        if (!messageText || !this.currentChatId) return;

        const newMessage = {
            id: Date.now(),
            text: messageText,
            sent: true,
            time: this.getCurrentTime(),
            status: 'sent'
        };

        // Add message to messages array
        if (!this.messages[this.currentChatId]) {
            this.messages[this.currentChatId] = [];
        }
        this.messages[this.currentChatId].push(newMessage);

        // Display message
        this.displayMessage(newMessage);

        // Clear input
        this.elements.messageInput.value = '';

        // Update last message in chat list
        const contact = this.contacts.find(c => c.id === this.currentChatId);
        if (contact) {
            contact.lastMessage = messageText;
            contact.time = newMessage.time;
            this.renderChatList();
            document.querySelector(`[data-contact-id="${this.currentChatId}"]`).classList.add('active');
        }

        // Scroll to bottom
        this.scrollToBottom();

        // Simulate message status updates
        setTimeout(() => {
            newMessage.status = 'delivered';
            this.updateMessageStatus(newMessage.id, 'delivered');
        }, 1000);

        setTimeout(() => {
            newMessage.status = 'read';
            this.updateMessageStatus(newMessage.id, 'read');
        }, 3000);

        // Simulate auto-reply for demo purposes
        if (Math.random() > 0.5) {
            setTimeout(() => this.simulateReply(), 2000);
        }
    }

    updateMessageStatus(messageId, status) {
        const messageElement = document.querySelector(`[data-message-id="${messageId}"]`);
        if (messageElement) {
            const statusElement = messageElement.querySelector('.message-status');
            if (statusElement) {
                statusElement.innerHTML = this.getStatusIcon(status);
            }
        }
    }

    simulateReply() {
        if (!this.currentChatId) return;

        const replies = [
            "Thanks for your message! 😊",
            "I'll get back to you soon",
            "That sounds great!",
            "Let me think about it",
            "Sure thing! 👍",
            "Absolutely!",
            "I agree with you",
            "Thanks for letting me know"
        ];

        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        
        const replyMessage = {
            id: Date.now(),
            text: randomReply,
            sent: false,
            time: this.getCurrentTime(),
            status: 'delivered'
        };

        this.messages[this.currentChatId].push(replyMessage);
        this.displayMessage(replyMessage);

        // Update chat list
        const contact = this.contacts.find(c => c.id === this.currentChatId);
        if (contact) {
            contact.lastMessage = randomReply;
            contact.time = replyMessage.time;
            this.renderChatList();
            document.querySelector(`[data-contact-id="${this.currentChatId}"]`).classList.add('active');
        }

        this.scrollToBottom();
    }

    toggleEmojiPicker() {
        if (this.isEmojiPickerOpen) {
            this.closeEmojiPicker();
        } else {
            this.openEmojiPicker();
        }
    }

    openEmojiPicker() {
        const emojis = ['😀', '😂', '😍', '🥰', '😊', '😎', '🤔', '😢', '😭', '😡', '🥺', '😱', '🤯', '🙄', '😴', '🤤', '👍', '👎', '👌', '✌️', '🤞', '👏', '🙌', '🤝', '❤️', '💕', '💖', '💗', '💝', '🎉', '🎊', '🔥', '✨'];
        
        const emojiGrid = document.createElement('div');
        emojiGrid.className = 'emoji-grid';
        
        emojis.forEach(emoji => {
            const emojiBtn = document.createElement('button');
            emojiBtn.className = 'emoji-item';
            emojiBtn.textContent = emoji;
            emojiBtn.addEventListener('click', () => this.insertEmoji(emoji));
            emojiGrid.appendChild(emojiBtn);
        });
        
        this.elements.emojiPicker.innerHTML = '';
        this.elements.emojiPicker.appendChild(emojiGrid);
        this.elements.emojiPicker.style.display = 'block';
        this.isEmojiPickerOpen = true;
    }

    closeEmojiPicker() {
        this.elements.emojiPicker.style.display = 'none';
        this.isEmojiPickerOpen = false;
    }

    insertEmoji(emoji) {
        const currentValue = this.elements.messageInput.value;
        const cursorPosition = this.elements.messageInput.selectionStart;
        const newValue = currentValue.slice(0, cursorPosition) + emoji + currentValue.slice(cursorPosition);
        
        this.elements.messageInput.value = newValue;
        this.elements.messageInput.focus();
        
        // Set cursor position after emoji
        setTimeout(() => {
            this.elements.messageInput.setSelectionRange(cursorPosition + emoji.length, cursorPosition + emoji.length);
        }, 0);
        
        this.closeEmojiPicker();
    }

    searchChats(query) {
        const filteredContacts = this.contacts.filter(contact => 
            contact.name.toLowerCase().includes(query.toLowerCase()) ||
            contact.lastMessage.toLowerCase().includes(query.toLowerCase())
        );
        
        this.elements.chatList.innerHTML = '';
        
        filteredContacts.forEach(contact => {
            const chatItem = document.createElement('div');
            chatItem.className = 'chat-item';
            chatItem.dataset.contactId = contact.id;
            
            chatItem.innerHTML = `
                <img src="${contact.avatar}" alt="${contact.name}" class="chat-avatar">
                <div class="chat-details">
                    <div class="chat-name">${contact.name}</div>
                    <div class="chat-last-message">${contact.lastMessage}</div>
                </div>
                <div class="chat-meta">
                    <div class="chat-time">${contact.time}</div>
                    ${contact.unread > 0 ? `<div class="chat-badge">${contact.unread}</div>` : ''}
                </div>
            `;
            
            chatItem.addEventListener('click', () => this.openChat(contact.id));
            this.elements.chatList.appendChild(chatItem);
        });
    }

    handleVoiceMessage() {
        if (!this.currentChatId) return;
        
        // Simulate voice message
        alert('Voice message feature would be implemented here!\n🎤 Recording functionality would be added.');
    }

    handleAttachment() {
        if (!this.currentChatId) return;
        
        // Create file input
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*,video/*,audio/*,.pdf,.doc,.docx';
        fileInput.style.display = 'none';
        
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                this.handleFileUpload(file);
            }
        });
        
        document.body.appendChild(fileInput);
        fileInput.click();
        document.body.removeChild(fileInput);
    }

    handleFileUpload(file) {
        const fileMessage = {
            id: Date.now(),
            text: `📎 ${file.name} (${this.formatFileSize(file.size)})`,
            sent: true,
            time: this.getCurrentTime(),
            status: 'sent',
            isFile: true
        };

        this.messages[this.currentChatId].push(fileMessage);
        this.displayMessage(fileMessage);

        // Update chat list
        const contact = this.contacts.find(c => c.id === this.currentChatId);
        if (contact) {
            contact.lastMessage = `📎 ${file.name}`;
            contact.time = fileMessage.time;
            this.renderChatList();
            document.querySelector(`[data-contact-id="${this.currentChatId}"]`).classList.add('active');
        }

        this.scrollToBottom();
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    handleTyping() {
        // Clear existing timeout
        if (this.typingTimeout) {
            clearTimeout(this.typingTimeout);
        }

        // Show typing indicator (in a real app, this would be sent to other users)
        this.typingTimeout = setTimeout(() => {
            // Hide typing indicator
        }, 1000);
    }

    startVideoCall() {
        if (!this.currentChatId) return;
        
        const contact = this.contacts.find(c => c.id === this.currentChatId);
        alert(`📹 Starting video call with ${contact.name}...\n\nVideo call functionality would be implemented here!`);
    }

    startVoiceCall() {
        if (!this.currentChatId) return;
        
        const contact = this.contacts.find(c => c.id === this.currentChatId);
        alert(`📞 Starting voice call with ${contact.name}...\n\nVoice call functionality would be implemented here!`);
    }

    getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
        });
    }

    scrollToBottom() {
        setTimeout(() => {
            this.elements.messages.scrollTop = this.elements.messages.scrollHeight;
        }, 100);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WhatsAppWeb();
    
    // Add some additional interactive features
    addThemeToggle();
    addNotificationSound();
});

// Theme toggle functionality
function addThemeToggle() {
    const menuBtn = document.getElementById('menuBtn');
    let isLightTheme = false;
    
    menuBtn.addEventListener('click', () => {
        isLightTheme = !isLightTheme;
        
        if (isLightTheme) {
            document.body.style.setProperty('--bg-primary', '#f0f2f5');
            document.body.style.setProperty('--bg-secondary', '#ffffff');
            document.body.style.setProperty('--text-primary', '#111b21');
            document.body.style.setProperty('--text-secondary', '#667781');
        } else {
            document.body.style.removeProperty('--bg-primary');
            document.body.style.removeProperty('--bg-secondary');
            document.body.style.removeProperty('--text-primary');
            document.body.style.removeProperty('--text-secondary');
        }
    });
}

// Notification sound (placeholder)
function addNotificationSound() {
    // In a real app, you would load and play actual sound files
    function playNotificationSound() {
        // Create a simple beep sound using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch (error) {
            console.log('Audio not supported');
        }
    }

    // Play sound when receiving messages (in demo mode)
    window.playNotificationSound = playNotificationSound;
}

// Add status update functionality
function addStatusFeature() {
    const statusBtn = document.getElementById('statusBtn');
    
    statusBtn.addEventListener('click', () => {
        alert('📱 Status feature!\n\nHere you would:\n• View others\' status updates\n• Post your own status\n• Manage privacy settings');
    });
}

// Initialize status feature
document.addEventListener('DOMContentLoaded', addStatusFeature);