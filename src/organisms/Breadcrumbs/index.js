import styles from "./Breadcrumbs.module.scss";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SimpleBreadcrumbs = () => {
  const [routeDetails, setRouteDetails] = useState([]);
  const [routeLength, setRouteLength] = useState(0);
  const route = useRouter();
  const routePath = route?.asPath?.split("/");

  useEffect(() => {
    let prev = "";
    setRouteLength(routePath.length);
    routePath?.map((data, index) => {
      const labelData = data;
      data = prev + data;
      prev = data + "/";
      routeDetails.push({
        label: data === "" ? "home" : labelData,
        link: prev,
      });
      setRouteDetails(routeDetails);
    });
  }, [routePath]);

  return (
    <div role="presentation" className={styles.breadcrumbsBody}>
      <Breadcrumbs aria-label="breadcrumb">
        {routeDetails?.slice(-routeLength)?.map((data, index) => {
          if (index !== routeDetails?.slice(-routeLength).length - 1) {
            return (
              <Link
                key={index}
                underline="hover"
                color="inherit"
                href={data?.link}
                style={{
                  opacity: "0.6",
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                {data?.label}
              </Link>
            );
          } else {
            return (
              <Typography key={index} color="text.primary">
                {data?.label}
              </Typography>
            );
          }
        })}
      </Breadcrumbs>
    </div>
  );
};

export default SimpleBreadcrumbs;
