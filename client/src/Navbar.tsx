import "../src/styles/Navbar.css";
import { A } from "@solidjs/router";

export const Navbar = () => {
    return (
        <nav>
            <ul class="nav-list">
                <A href="/" class="nav-link"> Home </A>
                <A href="/mail" class="nav-link">Mail Management</A>
                <A href="/template" class="nav-link active">Template Management</A>
            </ul>
        </nav>
    );
};
