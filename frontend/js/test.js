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