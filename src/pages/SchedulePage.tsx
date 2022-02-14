import React, { useEffect } from "react";
import { Calendly } from "../components/schedule/Calendly";
import { useQuery } from "../common/query";
import { getUserByEmail } from "../api";
import { useAuth0 } from "@auth0/auth0-react";


export const SchedulePage = (props: { history: string[]; }) => {
    const eventId = useQuery().get("eventId");
    const { getAccessTokenSilently, user } = useAuth0();
    async function loadData() {
        try {
            const token = await getAccessTokenSilently();
            let { data: userData } = await getUserByEmail(user.email, token)

            if (!userData || userData.credits <= 0) {
                props.history.push('/payment');
            }
        } catch {
            // props.history.push('/payment');
        }
    }
    useEffect(() => {
        loadData()
    }, []);

    return (
        <Calendly eventId={eventId!} minHeight="630px" /> 
    );
};