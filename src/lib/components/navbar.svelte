<script>
    import Fa from 'svelte-fa'
    import { faDiscord, faPatreon} from '@fortawesome/free-brands-svg-icons';
    import { faHome, faPlus, faBook } from '@fortawesome/free-solid-svg-icons';
    import { session } from "$app/stores"
</script>

<nav>
    <ul class="links">
        <li class="home-link">
            <a href="/" class="home">TechnoBot</a>
        </li>
        <li>
            <a href={import.meta.env.VITE_DISCORD_BOT_INVITE} target="_blank" rel="noopener noreferrer">
                <Fa scale={1.1} icon={faPlus} /> Invite
            </a>
        </li>
        <li>
            <a href="https://discord.gg/2TKJqfUQas" target="_blank" rel="noopener noreferrer">
                <Fa icon={faDiscord} /> Support
            </a>
        </li>
        <li>
            <a href="https://www.patreon.com/TechnoVision" target="_blank" rel="noopener noreferrer">
                <Fa icon={faPatreon} /> Premium
            </a>
        </li>
        <li>
            <a href="https://github.com/TechnoVisionDev/TechnoBot" target="_blank" rel="noopener noreferrer">
                <Fa icon={faBook} /> Source
            </a>
        </li>
    </ul>
    <ul class="icon-links">
        <li>
            <a class="icon" href="/">
                <Fa icon={faHome} />
            </a>
        </li>
        <li>
            <a class="icon" href={import.meta.env.VITE_DISCORD_BOT_INVITE} target="_blank" rel="noopener noreferrer">
                <Fa scale={1.2} icon={faPlus} />
            </a>
        </li>
        <li>
            <a class="icon" href="https://discord.gg/2TKJqfUQas" target="_blank" rel="noopener noreferrer">
                <Fa icon={faDiscord} />
            </a>
        </li>
        <li>
            <a class="icon" href="https://www.patreon.com/TechnoVision" target="_blank" rel="noopener noreferrer">
                <Fa icon={faPatreon} />
            </a>
        </li>
        <li>
            <a class="icon" href="https://github.com/TechnoVisionDev/TechnoBot" target="_blank" rel="noopener noreferrer">
                <Fa icon={faBook} />
            </a>
        </li>
    </ul>
    {#if $session} 
        <a class="login-button" href="/api/auth/signout">Logout</a>
    {:else}
        <a class="login-button" href="/api/auth">Login</a>
    {/if}
</nav>

<style>
    nav {
        background: linear-gradient(90deg,#5779ff,#57a5ff);
        display: flex;
        align-items: center;
        padding-right: 10px;
        height: 55px;
        position: fixed;
        z-index: 1000;
        top: 0;
        width: calc(100% - 10px);
    }
    .links {
        padding-inline-start: 30px;
    }
    .links li,
    .icon-links li {
        display: inline-block;
        font-size: 0.85rem;
        margin-right: 12px;
        cursor: pointer;
    }
    .icon-links {
        display: none;
    }
    .home-link {
        margin-right: 1.7rem !important;
    }
    .home {
        font-size: 1.1rem;
        font-weight: 500;
    }
    .login-button {
        font-family: 'Rubik', sans-serif;
        font-weight: 300;
        background-color: transparent;
        border: 2px solid #fefefe;
        border-radius: 20px;
        width: 65px;
        font-size: 0.9rem;
        margin-left: auto;
        cursor: pointer;
        text-align: center;
        padding: 8px;
    }
    .login-button:hover {
        background: linear-gradient(90deg,#5779ff,#57a5ff);
        cursor: pointer;
    }
    .icon {
        font-size: 0.85rem;
        margin-right: 3.5px;
    }
    @media screen and (max-width: 800px)  {
        .icon {
            font-size: 1.1rem;
            margin-right: 15px;
        }

        .icon-links {
            display: inline-block;
            padding-inline-start: 20px;
        }

        .links {
            display: none;
        }
    }
</style>