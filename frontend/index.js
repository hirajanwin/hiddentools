const tools = [
	{
        name: 'Magic Pattern',
        description: 'The magic geometric patterns editor',
        link: 'https://magicpattern.design',
        img: 'https://ph-files.imgix.net/c8c0e43d-cdcc-4ef4-b9eb-d69c44c1ac1f.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'Instatus',
		description: 'Quick & beautiful status pages',
        link: 'https://instatus.com',
        img: 'https://ph-files.imgix.net/eac49d6b-9e54-4dc9-849d-9d7447c6b798.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'Fluent',
		description: 'Learn languages by browsing the web',
        link: 'https://usefluent.co',
        img: 'https://ph-files.imgix.net/30116331-325b-438a-a0af-65b79c74ac53.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
	},
    {
        name: 'ClubLink',
		description: 'Generate a Clubhouse link that is worth sharing on social media! ✌️',
        link: 'https://clublink.to',
        img: 'https://clublink.to/assets/new-clublink-sharing-example.jpg'
    }, 
    {
        name: 'Clubhouse Glow',
		description: 'Quickly add colorful rings to clubhouse avatar!',
        link: 'https://avatar.lvwzhen.com',
        img: 'https://ph-files.imgix.net/da6b9cad-c8c6-45e3-9914-95ef3a08461e.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=563.6734693877551&h=380&fit=max'
    }, 
    {
        name: 'shorten.club',
		description: 'URL shortener to voice for Clubhouse 👋',
        link: 'https://shorten.club',
        img: 'https://ph-files.imgix.net/004af62b-779d-4ce0-a9a1-14f741cac6d3.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    }, 
    {
        name: 'Vowel',
		description: 'A video conferencing tool that makes meetings better',
        link: 'https://www.vowel.com',
        img: 'https://ph-files.imgix.net/8ec9eed3-985a-487c-840f-0121a5ab2a32.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'Virtual Venue by Mixily',
		description: 'Host custom video gatherings right in your website',
        link: 'https://www.mixily.com/features/virtualvenue',
        img: 'https://ph-files.imgix.net/eb7f2493-9018-4858-be6c-cedb64a07a67.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'Teamflow',
		description: 'Feel like a team again with your own virtual office',
        link: 'https://www.teamflowhq.com',
        img: 'https://ph-files.imgix.net/fef7dc97-2659-4321-afdb-903c5da8cd9c.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'Superpowered',
		description: 'See your daily schedule and join meetings in one-click',
        link: 'https://superpowered.me',
        img: 'https://ph-files.imgix.net/3cad99f2-8c3f-4301-b922-9b5331dc4b0b.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=633.3333333333333&h=380&fit=max'
    },
    {
        name: 'Comeet',
		description: 'Video-first async meetings inside your calendar',
        link: 'https://www.comeet.me',
        img: 'https://ph-files.imgix.net/0e70966b-e529-4ad0-a9cf-18cea000e643.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=634&h=380&fit=max'
    },
    {
        name: 'Screenity',
		description: 'The most powerful screen recorder for Chrome',
        link: 'https://chrome.google.com/webstore/detail/screenity-screen-recorder/kbbdabhdfibnancpjfhlkhafgdilcnji',
        img: 'https://ph-files.imgix.net/5516bf39-2f61-468a-86a9-3627d8a85a26.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=634.6555323590815&h=380&fit=max'
    },
    {
        name: 'Raise Hand to Raise Hand',
		description: 'Raise your hand in real life to raise your hand on Meet',
        link: 'https://chrome.google.com/webstore/detail/rhtrh-%E2%80%93-raise-hand-to-rai/eklmnoflmkgilkjdiocjonfcpdkacplj',
        img: 'https://ph-files.imgix.net/4b408350-217c-40c2-a83f-cb65945b8847.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'FreezingCam',
		description: 'Freeze your webcam during video calls',
        link: 'https://freezingcam.com',
        img: 'https://ph-files.imgix.net/f438c1c3-22e9-4d8c-9f03-bc6f4ca7c831.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=606.7817509247842&h=380&fit=max'
    },
    {
        name: 'CopyAI',
		description: 'GPT-3 powered tools to help you with your copywriting',
        link: 'https://copy.ai',
        img: 'https://ph-files.imgix.net/9eff3c45-014a-4e03-a923-181d667ed4d8.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=575.8500669344043&h=380&fit=max'
    },
    {
        name: 'Snazzy AI',
		description: 'AI-powered content creation. Free for everyone',
        link: 'https://snazzy.ai',
        img: 'https://ph-files.imgix.net/9692da56-4841-4e7d-9fe6-613e7441119c.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'Copysmith',
		description: 'GPT-3 powered content marketing that feels like magic',
        link: 'https://www.copysmith.ai',
        img: 'https://ph-files.imgix.net/257b56a7-e464-4a8f-a8be-b9e8e484a252.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=575.321725965178&h=380.00000000000006&fit=max'
    },
    {
        name: 'Company in a Box',
		description: 'Startup idea to leads in one click with GPT-3',
        link: 'https://companyinabox.ai',
        img: 'https://ph-files.imgix.net/a21a9c19-b214-40a8-ba0c-f67a530667d0.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'Swifter',
		description: 'Email subject line generator for B2B & B2C, built with GPT-3',
        link: 'https://www.swifterhq.com',
        img: 'https://ph-files.imgix.net/85ba3b29-ae47-4303-82e3-e0a14d36204c.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=675.5555555555555&h=380&fit=max'
    },
    {
        name: 'Paraglide',
		description: 'Create automated AI workflows in minutes',
        link: 'https://paraglide.ai',
        img: 'https://ph-files.imgix.net/42fa86d1-9e14-46f2-8514-eada9cc65552.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=675.5555555555555&h=380&fit=max'
    },
    {
        name: 'remove.bg',
		description: 'Remove the background of any image 100% automatically',
        link: 'https://remove.bg',
        img: 'https://ph-files.imgix.net/72b4eaa2-88f5-4e97-8cd7-bba1b0852a3d?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=570&h=380&fit=max'
    },
    {
        name: 'PicsArt: BG Remover',
		description: 'Remove the background of any image 100% automatically',
        link: 'https://picsart.com/background-remover',
        img: 'https://cdn130.picsart.com/94210882107903817544.png?to=fixed&type=webp&r=624x-1'
    },
    {
        name: 'Removal.ai',
		description: 'API for bulk image background removal',
        link: 'https://removal.ai',
        img: 'https://ph-files.imgix.net/ac89a905-912d-4ad8-8bca-ab2582c22dd2.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=646.8085106382978&h=380&fit=max'
    },
    {
        name: 'How Bad Is Your Spotify?',
		description: 'A sophisticated A.I. judges your awful taste in music.',
        link: 'https://pudding.cool/2020/12/judge-my-spotify',
        img: 'https://ph-files.imgix.net/181540f4-0447-4f06-abbb-6307a1a0ecbb.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=723.8095238095237&h=380&fit=max'
    },
	{
        name: 'Remotion',
		description: 'Create videos programmatically in React',
        link: 'https://remotion.dev',
        img: 'https://ph-files.imgix.net/7c03a4aa-1550-4cda-a12c-02597eecccea.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'Super.so',
		description: 'From Notion to Website in minutes',
        link: 'https://super.so',
        img: 'https://super.so/_next/image?url=https%3A%2F%2Fapi.super.so%2Fasset%2Fsuper.so%2Fb3e26071-7887-4cdc-8738-68a67f174e9a.png&q=75&w=3840'
    },
	{
        name: 'Potion Pages',
		description: 'The website builder for Notion',
        link: 'https://potion.page',
        img: 'https://www.potion.page/editor-styles-demo.63c8d6a.gif'
    },
    {
        name: 'Sotion.so',
		description: 'Password access for Notion pages',
        link: 'https://sotion.so',
        img: 'https://ph-files.imgix.net/37118685-02dd-4dbc-8420-9f78c373451a.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'Raindrop',
		description: 'All-in-one bookmark manager',
        link: 'https://raindrop.io',
        img: 'https://ph-files.imgix.net/c6c1d800-3e07-4fdb-adc0-1229153f3815.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=608&h=380&fit=max'
	},
	{
        name: 'Bkmark',
		description: 'Keep your bookmarks tidy',
        link: 'https://bkmark.io',
        img: 'https://bkmark.io/img/7.9e75c2f9.png'
    },
    {
        name: 'Qlearly',
		description: 'A modern bookmarks and tabs manager',
        link: 'https://qlearly.com',
        img: 'https://qlearly.com/extension_web/img/FinalQlearlyV2ExtensionScreenshot.png'
	},
    {
        name: 'Descript',
		description: 'Full featured video editor & screen recorder w/transcription',
        link: 'https://www.descript.com',
        img: 'https://ph-files.imgix.net/4856cef1-cdbd-4b74-9f7e-90f7d8d551b8.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=675.5555555555555&h=380&fit=max'
    },
    {
        name: 'Kapwing',
		description: 'Where content creation happens',
        link: 'https://kapwing.com',
        img: 'https://ph-files.imgix.net/fd59d48d-1d0b-4505-8023-9b029a7d38ce?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=637.3165618448637&h=380&fit=max'
    },
    {
        name: 'Evanesco',
		description: 'AI-Powered Video Editor for Creators',
        link: 'https://evanes.co',
        img: 'https://ph-files.imgix.net/384abd6e-7b9e-45c1-9f17-cde573e97841.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=701.5384615384615&h=380&fit=max'
    },
    {
        name: 'Jitter',
		description: 'A simple animation tool on the web',
        link: 'https://jitter.video',
        img: 'https://ph-files.imgix.net/ada1abd2-bf5e-4ab6-839a-44118e38fafd.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
	
];

const app = document.getElementById('app');

tools.forEach(tool => {
    const title = `${tool.name}`;
    const description = `${tool.description}`;
    const imgURL = `${tool.img}`;
    
	
	const toolEl = document.createElement('a');
	toolEl.classList.add('tool');
	toolEl.href = tool.link;
    toolEl.target = '_blank';
    toolEl.rel = 'noopener'

	toolEl.innerHTML = `
        <img style="border: 2px solid #fff;" src="${imgURL}" alt="${title}"/>
		<p>
            ${title} <br>
            <span style="color: #908f9e; font-weight: 500; font-size: 15px;">${description}</span> <br>
            
            
		</p>
    `;

	app.appendChild(toolEl);
});
