import { useEffect, useState } from "react";

export default function TabDays() {
  const currentDate = new Date();
  const [tabDays, setTabDays] = useState<string[]>([]);

  const generateTabDays = () => {
    const days = [];
    for (let i = 0; i < 20; i++) {
      const nextDate = new Date();
      nextDate.setDate(currentDate.getDate() + i);
      const formattedDate = `${nextDate.getDate()}/${nextDate.getMonth() + 1}`;
      days.push(formattedDate);
    }
    setTabDays(days);
  };
  useEffect(() => {
    generateTabDays();
  }, []);

  return tabDays;
}