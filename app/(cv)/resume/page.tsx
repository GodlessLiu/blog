import { FC } from "react";
import { Header } from "../components/Header";

const Resume: FC = () => {
    return (
        <div className="bg-background text-foreground">
            <Header />
            <div className="max-w-3xl mx-auto">
                resume
            </div>
        </div>
    );
}

export default Resume;