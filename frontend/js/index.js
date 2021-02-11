const tools = [
	{
        name: 'Magic Pattern',
        description: 'The magic geometric patterns editor',
        link: 'https://magicpattern.design',
        img: 'https://ph-files.imgix.net/c8c0e43d-cdcc-4ef4-b9eb-d69c44c1ac1f.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'Uizard',
		description: 'The design tool for everyone',
        link: 'https://uizard.io',
        img: 'https://ph-files.imgix.net/165a2e2d-0ccf-409d-8dbe-331164be7d4b.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
	},
    {
        name: 'Fluent',
		description: 'Learn languages by browsing the web',
        link: 'https://usefluent.co',
        img: 'https://ph-files.imgix.net/30116331-325b-438a-a0af-65b79c74ac53.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'Instatus',
		description: 'Quick & beautiful status pages',
        link: 'https://instatus.com',
        img: 'https://ph-files.imgix.net/eac49d6b-9e54-4dc9-849d-9d7447c6b798.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'Statuspal',
		description: 'Beautiful hosted status pages + more',
        link: 'https://statuspal.io',
        img: 'https://ph-files.imgix.net/5ffe83e2-d7f2-424a-8dca-cf741e9ed3d9.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'isBusy',
		description: 'Free personal status page',
        link: 'https://isbusy.app',
        img: 'https://ph-files.imgix.net/aba270fd-f587-48ad-b5c5-cc37ba551091.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'ClubLink',
		description: 'Generate a Clubhouse link that is worth sharing on social media! ✌️',
        link: 'https://clublink.to',
        img: 'https://clublink.to/assets/new-clublink-sharing-example.jpg'
    }, 
    {
        name: 'Clubhouse Avatar Maker',
		description: 'Quickly add colorful rings to clubhouse avatar!',
        link: 'https://avatar.lvwzhen.com',
        img: 'https://ph-files.imgix.net/da6b9cad-c8c6-45e3-9914-95ef3a08461e.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=563.6734693877551&h=380&fit=max'
    }, 
    {
        name: '[Promoted Slot]',
		description: 'Email me (imbereket@gmail.com), to claim this spot! :) 👋',
        link: 'mailto:imbereket@gmail.com?subject=Sponsored Slot',
        img: 'https://4.bp.blogspot.com/-1f1SDFIx3dY/Uh92eZAQ90I/AAAAAAAAHM4/5oiB4zC_tQ4/s1600/Photo-Background-White4.jpg'
    }, 
    {
        name: 'Vowel',
		description: 'A video conferencing tool that makes meetings better',
        link: 'https://vowel.com',
        img: 'https://ph-files.imgix.net/8ec9eed3-985a-487c-840f-0121a5ab2a32.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'Virtual Venue by Mixily',
		description: 'Host custom video gatherings right in your website',
        link: 'https://mixily.com/features/virtualvenue',
        img: 'https://ph-files.imgix.net/eb7f2493-9018-4858-be6c-cedb64a07a67.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'Teamflow',
		description: 'Feel like a team again with your own virtual office',
        link: 'https://teamflowhq.com',
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
        link: 'https://comeet.me',
        img: 'https://ph-files.imgix.net/0e70966b-e529-4ad0-a9cf-18cea000e643.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=634&h=380&fit=max'
    },
    {
        name: 'Screenity',
		description: 'The most powerful screen recorder for Chrome',
        link: 'https://chrome.google.com/webstore/detail/screenity-screen-recorder/kbbdabhdfibnancpjfhlkhafgdilcnji',
        img: 'https://ph-files.imgix.net/5516bf39-2f61-468a-86a9-3627d8a85a26.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=634.6555323590815&h=380&fit=max'
    },
    {
        name: 'Loom',
		description: 'Seamless screen, mic, and camera recording for Chrome',
        link: 'https://loom.com',
        img: 'https://ph-files.imgix.net/04b528fa-3327-44c7-985e-7f4aa9ad57c9?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=608&h=380&fit=max'
    },
    {
        name: 'FreezingCam',
		description: 'Freeze your webcam during video calls for MacOS',
        link: 'https://freezingcam.com',
        img: 'https://ph-files.imgix.net/f438c1c3-22e9-4d8c-9f03-bc6f4ca7c831.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=606.7817509247842&h=380&fit=max'
    },
    {
        name: 'Raise Hand to Raise Hand',
		description: 'Raise your hand in real life to raise your hand on Meet',
        link: 'https://chrome.google.com/webstore/detail/rhtrh-%E2%80%93-raise-hand-to-rai/eklmnoflmkgilkjdiocjonfcpdkacplj',
        img: 'https://ph-files.imgix.net/4b408350-217c-40c2-a83f-cb65945b8847.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'toast.log',
		description: '🤯 Get console errors right on your page',
        link: 'https://toastlog.com',
        img: 'https://ph-files.imgix.net/f8ecd871-c057-4801-a12b-3da556839199.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=674.5562130177515&h=380&fit=max'
    },
    {
        name: 'Divjoy',
		description: 'The React codebase & UI generator',
        link: 'https://divjoy.com',
        img: 'https://ph-files.imgix.net/68f982bf-2eb9-4902-a2c7-56791c821e61?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=679.1383812010444&h=380&fit=max'
    },
    {
        name: 'React UI Boutique',
		description: 'Hundreds of beautiful components',
        link: 'https://reactui.boutique',
        img: 'https://reactui.boutique/sharing/react-ui-boutique-1200-630.jpg'
    },
    {
        name: 'Snazzy AI',
		description: 'AI-powered content creation. Free for everyone',
        link: 'https://snazzy.ai',
        img: 'https://ph-files.imgix.net/9692da56-4841-4e7d-9fe6-613e7441119c.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'Company in a Box',
		description: 'Startup idea to leads in one click with GPT-3',
        link: 'https://companyinabox.ai',
        img: 'https://ph-files.imgix.net/a21a9c19-b214-40a8-ba0c-f67a530667d0.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'CopyAI',
		description: 'GPT-3 powered tools to help you with your copywriting',
        link: 'https://copy.ai',
        img: 'https://ph-files.imgix.net/9eff3c45-014a-4e03-a923-181d667ed4d8.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=575.8500669344043&h=380&fit=max'
    },
    {
        name: 'copypad',
		description: 'GPT3 generated ecommerce product descriptions',
        link: 'https://copypad.io',
        img: 'https://ph-files.imgix.net/0037907c-37e6-400a-8db4-2c3d472885a8.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=727.5748502994013&h=380.00000000000006&fit=max'
    },
    {
        name: 'Swifter',
		description: 'Email subject line generator for B2B & B2C, built with GPT-3',
        link: 'https://swifterhq.com',
        img: 'https://ph-files.imgix.net/85ba3b29-ae47-4303-82e3-e0a14d36204c.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=675.5555555555555&h=380&fit=max'
    },
    {
        name: 'Paraglide',
		description: 'Create automated AI workflows in minutes',
        link: 'https://paraglide.ai',
        img: 'https://ph-files.imgix.net/42fa86d1-9e14-46f2-8514-eada9cc65552.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=675.5555555555555&h=380&fit=max'
    },
    {
        name: 'Booste',
		description: 'Run machine learning from one line of code',
        link: 'https://booste.io',
        img: 'https://images-ext-1.discordapp.net/external/DV76wcCTNsIQ9JbazbejM56-evxgk1lNIRUojHlVBrg/%3Fauto%3Dformat%26auto%3Dcompress%26codec%3Dmozjpeg%26cs%3Dstrip%26w%3D675.5555555555555%26h%3D380%26fit%3Dmax/https/ph-files.imgix.net/2d63fb31-efe1-451b-a9ee-b7f00446b9f7.png'
    },
    {
        name: 'Tensorflow',
		description: 'Open-source machine learning library by Google',
        link: 'https://tensorflow.org',
        img: 'https://ph-files.imgix.net/ee2e992a-3629-4b8c-a287-959480840a59?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=672.3076923076923&h=379.99999999999994&fit=max'
    },
    {
        name: 'Intersect Labs',
		description: 'Visually build internal data apps - Machine Learning in 3 clicks',
        link: 'https://intersectlabs.io',
        img: 'https://ph-files.imgix.net/6351acb4-19c1-4fcc-9ba6-bce62f535e8c?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'ML Kit',
		description: 'Machine learning for mobile developers by Google',
        link: 'https://developers.google.com/ml-kit',
        img: 'https://ph-files.imgix.net/b7566da9-b1ac-4f44-b0a1-0cb8da7f938c?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=675.5555555555555&h=380&fit=max'
    },
    {
        name: 'Lobe',
		description: 'Train machine learning models with a free, easy to use tool',
        link: 'https://lobe.ai',
        img: 'https://ph-files.imgix.net/a1a45c38-52f4-4250-af04-00f2c2214c08.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'Melody ML',
		description: 'Separate music tracks using machine learning, for free',
        link: 'https://melody.ml',
        img: 'https://ph-files.imgix.net/4fbcfba1-ed32-49e0-98c7-27fa47ef76a9?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max'
    },
    {
        name: 'remove.bg',
		description: 'Remove the background of any image 100% automatically',
        link: 'https://remove.bg',
        img: 'https://ph-files.imgix.net/72b4eaa2-88f5-4e97-8cd7-bba1b0852a3d?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=570&h=380&fit=max'
    },
    {
        name: 'Trace',
		description: 'Instantly remove the background from your photos, free ✨',
        link: 'https://stickermule.com',
        img: 'https://ph-files.imgix.net/a65e593e-8978-4c7c-94e9-064353f7e11b.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=569.821930646673&h=380&fit=max'
    },
    {
        name: 'Photo Creator',
		description: 'AI-based photo creator with face swap and background removal',
        link: 'https://icons8.com/creator',
        img: 'https://ph-files.imgix.net/6118723a-e065-475f-b2d4-86dae5aff10b?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=605&h=380&fit=max'
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
        img: 'https://potion.page/editor-styles-demo.63c8d6a.gif'
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
        link: 'https://descript.com',
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
        name: 'Squircle',
		description: 'Create and edit shapes',
        link: 'https://figma.com/community/plugin/930173909910797614',
        img: 'https://figma.com/community/plugin/930173909910797614/thumbnail'
    },
    {
        name: 'Isometric',
		description: 'Create isometric layers automatically',
        link: 'https://figma.com/community/plugin/741184519069077841',
        img: 'https://figma.com/community/plugin/741184519069077841/thumbnail'
    },
    {
        name: 'Color Search',
		description: 'Search for anything, find a color',
        link: 'https://figma.com/community/plugin/768550475442788437',
        img: 'https://figma.com/community/plugin/768550475442788437/thumbnail'
    },
    {
        name: 'GetWaves',
		description: 'A free SVG wave generator',
        link: 'https://figma.com/community/plugin/745619465174154496/Get-Waves',
        img: 'https://figma.com/community/plugin/745619465174154496/thumbnail'
    },
    {
        name: 'Better Font Picker',
		description: 'Select fonts with a preview of it',
        link: 'https://figma.com/community/plugin/739922281164562258/Better-Font-Picker',
        img: 'https://figma.com/community/plugin/739922281164562258/thumbnail'
    },
    {
        name: 'Blush',
		description: 'Create and customize illustrations in your designs',
        link: 'https://figma.com/community/plugin/838959511417581040/Blush',
        img: 'https://figma.com/community/plugin/838959511417581040/thumbnail'
    },
    {
        name: 'uiGradients',
		description: 'Adds gradients to groups, text and frames in single click',
        link: 'https://figma.com/community/plugin/744909029427810418/uiGradients',
        img: 'https://figma.com/community/plugin/744909029427810418/thumbnail'
    },
    {
        name: 'Image Tracer',
		description: 'Traces black & white bitmap images, and turns them into a vector layer',
        link: 'https://figma.com/community/plugin/735707089415755407/Image-tracer',
        img: 'https://figma.com/community/plugin/735707089415755407/thumbnail'
    },
    {
        name: 'SkewDat',
		description: 'Live skew any shape and fine-tune with simple non-destructive controls',
        link: 'https://figma.com/community/plugin/741472919529947576/SkewDat',
        img: 'https://figma.com/community/plugin/741472919529947576/thumbnail'
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
    toolEl.rel = 'noopener"'


	toolEl.innerHTML = `
        <img style="border: 2px solid #fff;" src="${imgURL}" alt="${title}"/>
		<p>
            ${title} <br>
            <span style="color: #908f9e; font-weight: 500; font-size: 15px;">${description}</span> <br>
            
            
		</p>
    `;

	app.appendChild(toolEl);
});
