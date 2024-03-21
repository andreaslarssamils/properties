import "../assets/styles/globals.css";

export const metadata = {
  title: "properties",
  description: "properties for rent and buy",
  keywords: "properties, rent, buy",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};
export default MainLayout;
