# 🤖 SHNTNU AI - Custom Chatbot Website

**Your Personal AI Assistant Built with Llama AI**

A complete, production-ready AI chatbot website using the Llama 2 model from Hugging Face. Built with HTML/CSS/JavaScript frontend and Express.js backend. Deploy to Vercel or Netlify for 24/7 availability with your own custom branding.

## 🌟 Features

- ✨ Beautiful, responsive chat interface
- 🤖 Powered by Meta's Llama 2 AI model
- ⚡ Fast and reliable backend
- 📱 Mobile-friendly design
- 🎨 Fully customizable branding
- 🚀 Easy 1-click deployment to Vercel
- 💾 No database needed
- 24/7 uptime with free hosting

## 📋 Prerequisites

Before deploying, you need:

1. **Node.js** (version 14 or higher) - [Download](https://nodejs.org/)
2. **Hugging Face API Key** - [Get it here](https://huggingface.co/settings/tokens)
3. **GitHub Account** - For version control
4. **Vercel Account** - [Sign up for free](https://vercel.com)

## 🚀 Quick Start (Local Development)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/SHNTNU-AI-Website.git
cd SHNTNU-AI-Website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment File

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Then edit `.env` and add your Hugging Face API key:

```
HF_API_KEY=your_actual_api_key_here
PORT=5000
```

### 4. Run the Server

```bash
npm start
```

The application will be available at `http://localhost:5000`

## 🌐 Deploy to Vercel (Recommended)

### Option 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Set Environment Variables in Vercel:**
   - Go to your Vercel project dashboard
   - Settings → Environment Variables
   - Add `HF_API_KEY` with your Hugging Face API key

### Option 2: Connect GitHub (One-Click Deploy)

1. Push your repository to GitHub
2. Go to [Vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Add environment variable `HF_API_KEY`
6. Click "Deploy"

## 🔑 Getting Your Hugging Face API Key

1. Go to [Hugging Face Settings](https://huggingface.co/settings/tokens)
2. Click "New token"
3. Give it a name (e.g., "SHNTNU AI")
4. Select "Read" access level
5. Copy the token and add it to your `.env` file

## 📁 Project Structure

```
SHNTNU-AI-Website/
├── public/                 # Frontend files
│   ├── index.html         # Main HTML
│   ├── style.css          # Styling
│   └── script.js          # Frontend logic
├── server.js              # Express server
├── package.json           # Dependencies
├── .env.example           # Environment template
└── README.md              # This file
```

## 🎨 Customization

### Change the Bot Name

Edit `public/index.html` line 10:
```html
<h1>🤖 YOUR NAME AI</h1>
```

### Change Colors

Edit `public/style.css` and replace:
- `#667eea` (primary color)
- `#764ba2` (secondary color)

With your preferred colors.

### Change Welcome Message

Edit `public/index.html` line 19:
```html
<p>Hello! I'm YOUR NAME AI. How can I help you today?</p>
```

## 🔧 Using Different AI Models

To use a different Hugging Face model, edit `server.js` line 18:

```javascript
// Change this URL to any Hugging Face model:
https://api-inference.huggingface.co/models/meta-llama/Llama-2-7b-chat-hf
```

Popular alternatives:
- `mistralai/Mistral-7B-Instruct-v0.1` (Faster)
- `tiiuae/falcon-7b-instruct` (Good quality)
- `meta-llama/Llama-2-13b-chat-hf` (More powerful)

## 📊 Pricing

- **Frontend Hosting (Vercel):** FREE ✨
- **Backend Hosting (Vercel):** FREE ✨  
- **Hugging Face API:** FREE (with rate limits) ⚡
  - Upgrade to Pro ($9/month) for higher limits

## 🐛 Troubleshooting

### "Cannot find module"
```bash
rm -rf node_modules
npm install
```

### "API Key Invalid"
- Check your HF_API_KEY is correct
- Make sure you added it to Vercel Environment Variables
- Restart the deployment

### "Port already in use"
```bash
# On Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# On macOS/Linux:
lsof -i :5000
kill -9 <PID>
```

## 📝 License

Free to use and modify for personal and commercial projects.

## 👨‍💻 Author

Built with ❤️ by SHNTNU

## 🤝 Support

For issues or questions:
- Check the troubleshooting section above
- Open an issue on GitHub
- Check Hugging Face documentation

---

**Happy Chatting! 🚀**
