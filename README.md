# Chat Widget

This repository contains a chat widget component that can be easily integrated into your web application. The widget supports themes and can be configured using an API key.

## Usuage
To use the chat widget straight away, you can include the following code in your `layout.tsx` file in your Next.js project:
```tsx
// ... 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
          <title>Chat-widget Examples</title>
      </head>
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div id={"chat-widget"} data-apikey={"YOUR_API_KEY"} data-theme={"light"}/>
      <Script
          src="https://cdn.jsdelivr.net/gh/intraining-org/chat-widget@0.0.1-beta/chat-widget.js"
          strategy="afterInteractive"
      />
      {children}
      </body>
      </html>
  );
}
```
To get the api key, you can sign up [here]() and get your api key from the dashboard.

## Run Locally
To run the project locally, you can follow the steps below:
1. **Clone the repository:**

   ```bash
   git clone https://github.com/intraining-org/chat-widget.git
   cd chat-widget
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```
3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:3000` to see the chat widget in action.

## Example

An example Next.js application is provided in the `examples/nextjs` folder. You can run the example by navigating to the folder and starting the development server:

```bash
cd examples/nextjs
npm install
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the chat widget in action.

![chat widget.png](assets/chat%20widget.png)
## License
The project is licensed under the Apache License 2.0. You can find the license [here](https://github.com/intraining-org/chat-widget/blob/main/LICENSE).