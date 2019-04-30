import React, { useContext, useEffect } from "react";

import { Section, H2 } from "~/components";
import { AuthContext } from "~/state";
import { debug } from "~/util";

const Home = () => {
  const { getUser } = useContext(AuthContext);

  useEffect(() => {
    getUser().then(u => {
      debug("user", u);
    });
  }, []);

  return (
    <Section>
      <H2>Home</H2>
    </Section>
  );
};

export default Home;
