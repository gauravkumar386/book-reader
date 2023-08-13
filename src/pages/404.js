const { default: CustomButton } = require("@/organisms/Button");
const { default: Link } = require("next/link");

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection:'column',
        alignItems: "center",
        marginTop: "10rem"
      }}
    >
      <h1>404! - Page Not Found</h1>
      <Link href={"/"}>
        <CustomButton>Go to Homepage</CustomButton>
      </Link>
    </div>
  );
};

export default NotFound;
