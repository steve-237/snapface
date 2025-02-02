# 📸 SnapFace

SnapFace is an Angular project inspired by OpenClassrooms to help developers learn the fundamentals of Angular. The application displays a list of images with a "Snap" button that allows users to like the images.

## 🚀 Features

- 🖼️ Display a list of face posts with descriptions  
- 👍 "Snap" a post to increase its score  
- 🔍 View detailed information about each post  
- 🔄 Angular routing for smooth navigation  
- ⚡ Services to manage application state  

## 🛠️ Technologies Used

- 🅰️ **Angular** (version 18)  
- 🟦 **TypeScript**  
- 🔄 **RxJS**  
- 🎨 **SCSS/CSS** for styling  
- 🛠️ **Angular CLI** for project management  

## 📥 Installation

Follow these steps to install and run the project locally:

1. 📂 Clone the repository:  
   ```sh
   git clone https://github.com/yourusername/snapface.git
   cd snapface
   npm install
   ng serve
   ```

2. 📁 Project Structure  
```
SnapFace/
├── src/
│   ├── app/
│   │   ├── components/   # 🎭 Reusable components
│   │   ├── services/     # 🔧 Application services
│   │   ├── models/       # 📝 Data models
│   │   ├── app.module.ts # 📦 Main module
│   │   ├── app-routing.module.ts # 🛤️ Routing configuration
│   ├── assets/           # 🖼️ Static assets
│   ├── styles/           # 🎨 Global styles
├── angular.json          # ⚙️ Angular configuration
├── package.json          # 📜 Dependencies and scripts
```

3. 🖱️ Usage  
- 👍 Click the "Snap" button to like a post.  
- 🔍 Click on a post to view details.  
- 🚀 Use the Angular Router to navigate between pages.  
