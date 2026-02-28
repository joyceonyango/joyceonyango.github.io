---
title: Portfolio
icon: fa-th
order: 2
---

<p>
Selected data and geospatial analytics projects demonstrating data analysis,
spatial intelligence, and applied problem solving.
</p>

<div class="row">

  <div class="6u 12u$(mobile)">
    <div class="item">
      <a class="image fit" onclick="toggleProject('conservation')" style="cursor:pointer;">
        <img src="{{ 'assets/images/conservation.jpg' | relative_url }}" alt="Conservation Funding in Africa" />
      </a>
      <header>
        <h3>Conservation Funding in Africa</h3>
        <p>Geospatial analysis of conservation funding distribution across Africa using data analytics and spatial methods.</p>
        <button class="toggle-btn" onclick="toggleProject('conservation')">▶ View Details</button>
      </header>

      <div class="project-details" id="conservation">
        <h4>Overview</h4>
        <p>This project evaluates whether conservation funding across Africa is aligned with ecological value, combining biodiversity records, funding data, and geospatial biodiversity intactness metrics across all 53 African countries.</p>

        <h4>Problem Statement</h4>
        <p>Conservation funding is unevenly distributed. The project answers: Are biodiversity-rich countries receiving adequate funding? Does funding align with biodiversity intactness? Which countries should be prioritized?</p>

        <h4>Key Findings</h4>
        <p>Mean funding per country is $8.34M but heavily right-skewed — a few countries absorb most funding. Several high-biodiversity countries are significantly underfunded:</p>

        <table>
          <tr><th>Country</th><th>Species Count</th><th>Funding (M USD)</th></tr>
          <tr><td>Ethiopia</td><td>70</td><td>4.01</td></tr>
          <tr><td>Zimbabwe</td><td>60</td><td>4.07</td></tr>
          <tr><td>Tunisia</td><td>59</td><td>0.00</td></tr>
          <tr><td>Uganda</td><td>58</td><td>2.86</td></tr>
          <tr><td>Nigeria</td><td>57</td><td>2.64</td></tr>
        </table>

        <p>Countries with high Biodiversity Intactness Index scores (ecologically stable) are also under-protected — representing missed opportunities for preventative investment.</p>

        <h4>Tech Stack</h4>
        <p>Python · Pandas · GeoPandas · Rasterio · Zonal Statistics · Matplotlib · Jupyter Notebook</p>

        <p><a href="https://github.com/joyceonyango/Conservation-Funding-in-Africa" target="_blank">View Full Code on GitHub →</a></p>
      </div>

    </div>
  </div>

</div>

<script>
  function toggleProject(id) {
    const el = document.getElementById(id);
    const btn = el.previousElementSibling.querySelector('.toggle-btn');
    el.classList.toggle('open');
    if (el.classList.contains('open')) {
      btn.textContent = '▼ Hide Details';
    } else {
      btn.textContent = '▶ View Details';
    }
  }
</script>

