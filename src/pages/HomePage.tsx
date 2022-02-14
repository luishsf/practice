import React from "react";
import { LeadCall } from "../components/home/LeadCall";
import { PageFooter } from "../components/home/PageFooter";
import { ScheduleCategories } from "../components/home/ScheduleCategories";
import { ThemesSection } from "./ThemesSection";
import { HowItWorks } from "./HowItWorks";

export const HomePage = () => {
    
    return (
        <>
            <LeadCall />
            <ThemesSection />
            <HowItWorks />
            <ScheduleCategories />
            <PageFooter />
        </>
    );

}