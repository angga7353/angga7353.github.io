
document.addEventListener('DOMContentLoaded', function () {
  const root = document.getElementById('root');
  root.innerHTML = `
    <div class='max-w-4xl mx-auto px-4 py-10 font-sans'>
      <div class='flex justify-between items-center mb-10'>
        <h1 class='text-4xl font-bold text-[#2F4F4F] dark:text-white'>Angga Fadhlurrahman Prianto</h1>
        <button id='theme-toggle' class='bg-[#2F4F4F] text-white px-4 py-2 rounded'>Toggle Dark Mode</button>
      </div>
      <div class='flex flex-col md:flex-row items-center mb-10'>
        <img src='avatar.png' alt='Avatar' class='w-32 h-32 rounded-full border-4 border-[#2F4F4F] mb-4 md:mb-0 md:mr-8'/>
        <p class='text-lg'>IT professional with 3+ years of experience in end-user support, data engineering, and analytics. Skilled in Python, SQL, Airflow, and cloud tools.</p>
      </div>
      <section class='mb-8'>
        <h2 class='text-2xl font-semibold text-[#2F4F4F] dark:text-white mb-2'>🧠 Technical Skills</h2>
        <ul class='list-disc list-inside space-y-1'>
          <li>Python, SQL, JavaScript</li>
          <li>Apache Airflow, Docker, Great Expectations</li>
          <li>Tableau, Kibana, Streamlit</li>
        </ul>
      </section>
      <section class='mb-8'>
        <h2 class='text-2xl font-semibold text-[#2F4F4F] dark:text-white mb-2'>📂 Portfolio Projects</h2>
        <div class='grid gap-4'>
          <div class='p-4 bg-gray-100 dark:bg-gray-800 rounded shadow'>
            <h3 class='font-bold'>Property Price Trend Analysis</h3>
            <p>Built Airflow DAGs, Dockerized PostgreSQL & Kibana, and visualized real estate trends.</p>
          </div>
          <div class='p-4 bg-gray-100 dark:bg-gray-800 rounded shadow'>
            <h3 class='font-bold'>AISeeYou – Object Detection</h3>
            <p>YOLOv8 + Streamlit deployment for X-ray object detection on Hugging Face.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 class='text-2xl font-semibold text-[#2F4F4F] dark:text-white mb-2'>📫 Contact</h2>
        <ul class='space-y-1'>
          <li>Email: angga.fpriyanto@gmail.com</li>
          <li>GitHub: <a href='https://github.com/angga7353' class='text-blue-500'>github.com/angga7353</a></li>
          <li>LinkedIn: <a href='https://linkedin.com/in/angga-fadhlurrahman-prianto' class='text-blue-500'>linkedin.com/in/angga-fadhlurrahman-prianto</a></li>
        </ul>
      </section>
    </div>
  `;

  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
});
