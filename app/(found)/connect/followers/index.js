"use client";

import { useEffect, useState } from "react";
import getFollowers from "./get-followers";

const followersGoal = ({ current }) => Math.pow(10, (current + "").length);

export default function Followers() {
  const [goalString, setGoalString] = useState("?/?");

  useEffect(() => {
    getFollowers().then((followers) => {
      setGoalString(`${followers}/${followersGoal({ current: followers })}`);
    });
  }, []);

  return (
    <div className="indent">
      Followers progress: {goalString}
    </div>
  );
}
