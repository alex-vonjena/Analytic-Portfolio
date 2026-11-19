// Add your own HTML or PDF documents below. Put files in the "labs" and
// "summaries" folders and update each URL to match the filename exactly.
// Example: { title: "Data Cleaning Lab", description: "Python and pandas data preparation.", url: "labs/data-cleaning.html", tag: "PYTHON" }
const labs = [
  // { title: "Your Lab Title", description: "What you analyzed and learned.", url: "labs/your-lab.html", tag: "PYTHON" },
];
const summaries = [
  { title: "Waze Executive Summary 1", url: "Waze 1 Executive Summary.pdf", tag: "REPORT" },
  { title: "Waze Executive Summary 2", url: "Waze 2 Executive Summary.pdf", tag: "REPORT" },
  { title: "Waze Executive Summary 3", url: "Waze 3 Executive Summary.pdf", tag: "REPORT" },
  { title: "Waze Executive Summary 4", url: "Waze 4 Executive Summary.pdf", tag: "REPORT" },
  { title: "Waze Executive Summary 5", url: "Waze 5 Executive Summary.pdf", tag: "REPORT" },
  { title: "Waze Capstone Executive Summary", url: "Waze 6 Executive Summary.pdf", tag: "REPORT" },
  // { title: "Your Executive Summary", description: "Key insights and business recommendations.", url: "summaries/your-summary.html", tag: "REPORT" },
];
function renderProjects(id, items, type) {
  const container = document.getElementById(id);
  if (!items.length) {
    const folder = type === 'Lab' ? 'labs' : 'summaries';
    container.innerHTML = `<div class="empty"><strong>Projects coming soon</strong>Add your ${type.toLowerCase()} HTML files to the <code>${folder}/</code> folder, then list them in <code>projects.js</code> to display clickable links here.</div>`;
    return;
  }
  for (const item of items) {
    const link = document.createElement('a'); link.className='project-item'; link.href=item.url;
    const info = document.createElement('div'); const tag=document.createElement('span'); tag.className='tag'; tag.textContent=item.tag || type.toUpperCase();
    const title=document.createElement('h3'); title.textContent=item.title;
    const desc=document.createElement('p'); desc.textContent=item.description || '';
    const arrow=document.createElement('span'); arrow.className='arrow'; arrow.setAttribute('aria-hidden','true'); arrow.textContent='↗';
    info.append(tag,title,desc); link.append(info,arrow); container.append(link);
  }
}
renderProjects('labs-list',labs,'Lab'); renderProjects('summaries-list',summaries,'Summary');
document.getElementById('year').textContent=new Date().getFullYear();
