<section class="info">
    <div class="feature">
        <div>
            <h2>Leveling and Reputation Systems</h2>
            <p>Keep your members engaged with a highly customizable leveling and Reputation
                system. By sending chat messages, members can earn ranks and customize their
                profiles to build a lasting reputation on your server!
            </p>
        </div>
        <img src="/home/leveling.png" alt="leveling interface" />
    </div>
    <div class="feature">
        <div>
            <h2>Custom Greetings & Auto-Roles</h2>
            <p>TechnoBot can welcome new server members with personalized join, farewell, and
                DM messages. You can even set custom roles to give to new members!
            </p>
        </div>
        <img src="/home/welcome.png" alt="greetings interface" />
    </div>
    <div class="feature">
        <div>
            <h2>Music Integration</h2>
            <p>Play music in real time with your friends through voice chat. Search for songs,
                build a rockin playlist, and jam out to your favorite tunes with our advanced
                music player.
            </p>
        </div>
        <img src="/home/music.png" alt="music interface" />
    </div>
    <div class="feature">
        <div>
            <h2>Economy, Shops, and Gambling</h2>
            <p>Create a digital economy for your server, complete with jobs, crime,
                shopping, and even a casino. You can even set up your own store to sell
                custom items and perks!
            </p>
        </div>
        <img src="/home/economy.png" alt="economy interface" />
    </div>
    <div class="feature">
        <div>
            <h2>Advanced Moderation Tools</h2>
            <p>Deal out punishments, automatically log important changes to your server,
                and set important auto-moderation routines to manage tasks for you. TechnoBot&apos;s
                staff tools allow you to easily manage a server of any size!
            </p>
        </div>
        <img src="/home/moderation.png" alt="moderation interface" />
    </div>
    <div class="feature">
        <div>
            <h2>Suggestions</h2>
            <p>Listen, curate, and respond to feedback with our powerful suggestion system.
                Members can vote for their favorite poposals and staff responses in real time,
                making community feedback fun and engaging.
            </p>
        </div>
        <img src="/home/suggestions.png" alt="suggestions interface" />
    </div>
    <div class="feature">
        <div>
            <h2>Starboard</h2>
            <p>The starboard is a community leaderboard that allows your members to share and
                upvote custom content. Your members will love sharing pictures and videos to
                see how many stars they can earn!
            </p>
        </div>
        <img src="/home/starboard.png" alt="starboard interface" />
    </div>
    <div class="feature">
        <div>
            <h2>Ticket System</h2>
            <p>Create a ticket system that allows your members to communicate with staff
                quickly and privately. Perfect for customer support, ban appeals, or general
                inquiries.
            </p>
        </div>
        <img src="/home/tickets.png" alt="Tickets interface" />
    </div>
</section>

<style>
    .info {
        background-color: #2f353a;
        margin-top: 12rem;
    }
    .feature {
        padding: 10rem 5rem 5rem 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1440px;
        margin: auto;
    }
    .feature h2 {
        font-size: 30px;
    }
    .feature p {
        color: #969899;
        max-width: 35rem;
        font-size: 21px;
        font-weight: 400;
        line-height: 1.4em;
        margin-right: 5em;
    }
    .feature img {
        flex: 1 1 0%;
        max-width: 50%;
        max-height: 50%;
    }
    @media screen and (max-width: 1100px)  {
        .feature {
            flex-direction: column;
            text-align: center;
            padding: 10rem 0.5rem 5rem 0.5rem;
        }
        .feature img {
            margin-bottom: 3rem;
            max-width: 100%;
            max-height: 100%;
        }
        .feature > div {
            order: 1;
            padding-left: 2.5rem;
            padding-right: 2.5rem;
        }
        .feature h2 {
            margin: 0 0 20px 0;
            padding: 0;
        }
        .feature p {
            margin: 0;
            padding: 0;
            line-height: 1.6em;
            max-width: 50rem;
        }
    }
</style>