
        const governmentData = [
            // CENTRAL LEVEL (only when "All Central" is selected)
            { name: "Office of the Prime Minister and Council of Ministers", url: "https://www.opmcm.gov.np/", department: "Prime Minister & Council of Ministers", province: "", type: "central" },
            { name: "Ministry of Finance", url: "https://mof.gov.np/", department: "Finance", province: "", type: "central" },
            { name: "Ministry of Home Affairs", url: "https://moha.gov.np/", department: "Home Affairs", province: "", type: "central" },
            { name: "Ministry of Foreign Affairs", url: "https://mofa.gov.np/", department: "Foreign Affairs", province: "", type: "central" },
            { name: "Ministry of Defence", url: "https://mod.gov.np/", department: "Defence", province: "", type: "central" },
            { name: "Ministry of Health and Population", url: "https://mohp.gov.np/", department: "Health and Population", province: "", type: "central" },
            { name: "Ministry of Education, Science and Technology", url: "https://moest.gov.np/", department: "Education, Science & Technology", province: "", type: "central" },
            { name: "Ministry of Energy, Water Resources and Irrigation", url: "https://moewri.gov.np/", department: "Energy, Water Resources & Irrigation", province: "", type: "central" },
            { name: "Ministry of Agriculture and Livestock Development", url: "https://moald.gov.np/", department: "Agriculture & Livestock Development", province: "", type: "central" },
            { name: "Ministry of Forests and Environment", url: "https://www.mofe.gov.np/", department: "Forests and Environment", province: "", type: "central" },
            { name: "Ministry of Land Management, Cooperatives and Poverty Alleviation", url: "https://molcpa.gov.np/", department: "Land Management, Cooperatives & Poverty Alleviation", province: "", type: "central" },
            { name: "Ministry of Physical Infrastructure and Transport", url: "https://www.mopit.gov.np/", department: "Physical Infrastructure & Transport", province: "", type: "central" },
            { name: "Ministry of Industry, Commerce and Supplies", url: "https://www.moics.gov.np/", department: "Industry, Commerce & Supplies", province: "", type: "central" },
            { name: "Ministry of Labour, Employment and Social Security", url: "https://moless.gov.np/", department: "Labour, Employment & Social Security", province: "", type: "central" },
            { name: "Ministry of Women, Children and Senior Citizens", url: "https://mowcsc.gov.np/", department: "Women, Children & Senior Citizens", province: "", type: "central" },
            { name: "Ministry of Culture, Tourism and Civil Aviation", url: "https://www.tourism.gov.np/", department: "Culture, Tourism & Civil Aviation", province: "", type: "central" },
            { name: "Ministry of Communication and Information Technology", url: "https://www.mocit.gov.np/", department: "Communication & Information Technology", province: "", type: "central" },
            { name: "Ministry of Youth and Sports", url: "https://www.moys.gov.np/", department: "Youth and Sports", province: "", type: "central" },
            { name: "Ministry of Law, Justice and Parliamentary Affairs", url: "https://moljpa.gov.np/", department: "Law, Justice & Parliamentary Affairs", province: "", type: "central" },
            { name: "Ministry of Federal Affairs and General Administration", url: "https://www.mofaga.gov.np/", department: "Federal Affairs & General Administration", province: "", type: "central" },
            { name: "Election Commission Nepal", url: "https://election.gov.np/", department: "Election Commission", province: "", type: "central" },
            { name: "Commission for the Investigation of Abuse of Authority (CIAA)", url: "https://ciaa.gov.np/", department: "CIAA", province: "", type: "central" },
            { name: "Office of the Auditor General", url: "https://oag.gov.np/", department: "Auditor General", province: "", type: "central" },
            { name: "Public Service Commission (Lok Sewa Aayog)", url: "https://psc.gov.np/", department: "Public Service Commission", province: "", type: "central" },
            { name: "National Planning Commission", url: "https://npc.gov.np/", department: "National Planning Commission", province: "", type: "central" },
            { name: "Office of the Attorney General", url: "https://ag.gov.np/", department: "Attorney General", province: "", type: "central" },
            { name: "National Human Rights Commission", url: "https://nhrcnepal.org/", department: "National Human Rights Commission", province: "", type: "central" },

            // PROVINCIAL LEVEL (only when specific province selected)
            // Koshi Province
            { name: "Office of Chief Minister and Council of Ministers - Koshi", url: "https://ocmcm.koshi.gov.np/", department: "Chief Minister Office", province: "Koshi", type: "provincial" },
            { name: "Ministry of Tourism, Forests and Environment - Koshi", url: "https://motfe.koshi.gov.np/", department: "Tourism, Forests & Environment", province: "Koshi", type: "provincial" },
            { name: "Ministry of Internal Affairs and Law - Koshi", url: "https://mial.koshi.gov.np/", department: "Internal Affairs and Law", province: "Koshi", type: "provincial" },
            { name: "Ministry of Economic Affairs and Planning - Koshi", url: "https://moeap.koshi.gov.np/", department: "Economic Affairs and Planning", province: "Koshi", type: "provincial" },
            { name: "Ministry of Social Development - Koshi", url: "https://mosd.koshi.gov.np/", department: "Social Development", province: "Koshi", type: "provincial" },

            // Madhesh Province
            { name: "Office of Chief Minister and Council of Ministers - Madhesh", url: "https://ocmcm.madhesh.gov.np/", department: "Chief Minister Office", province: "Madhesh", type: "provincial" },
            { name: "Ministry of Finance - Madhesh", url: "https://mof.madhesh.gov.np/", department: "Finance", province: "Madhesh", type: "provincial" },
            { name: "Ministry of Health and Population - Madhesh", url: "https://mohp.madhesh.gov.np/", department: "Health and Population", province: "Madhesh", type: "provincial" },
            { name: "Ministry of Physical Infrastructure Development - Madhesh", url: "https://mopid.madhesh.gov.np/", department: "Physical Infrastructure", province: "Madhesh", type: "provincial" },
            { name: "Ministry of Education - Madhesh", url: "https://moe.madhesh.gov.np/", department: "Education", province: "Madhesh", type: "provincial" },

            // Bagmati Province
            { name: "Office of Chief Minister and Council of Ministers - Bagmati", url: "https://ocmcm.bagamati.gov.np/", department: "Chief Minister Office", province: "Bagmati", type: "provincial" },
            { name: "Ministry of Economic Affairs and Planning - Bagmati", url: "https://moeap.bagamati.gov.np/", department: "Economic Affairs and Planning", province: "Bagmati", type: "provincial" },
            { name: "Ministry of Health - Bagmati", url: "https://moh.bagamati.gov.np/", department: "Health", province: "Bagmati", type: "provincial" },
            { name: "Ministry of Internal Affairs and Law - Bagmati", url: "https://moial.bagamati.gov.np/", department: "Internal Affairs and Law", province: "Bagmati", type: "provincial" },
            { name: "Ministry of Social Development - Bagmati", url: "https://mosd.bagamati.gov.np/", department: "Social Development", province: "Bagmati", type: "provincial" },
            { name: "Ministry of Physical Infrastructure Development - Bagmati", url: "https://mopid.bagamati.gov.np/", department: "Physical Infrastructure", province: "Bagmati", type: "provincial" },

            // Gandaki Province
            { name: "Office of Chief Minister and Council of Ministers - Gandaki", url: "https://ocmcm.gandaki.gov.np/", department: "Chief Minister Office", province: "Gandaki", type: "provincial" },
            { name: "Ministry of Physical Infrastructure Development and Transport - Gandaki", url: "https://mopid.gandaki.gov.np/", department: "Physical Infrastructure & Transport", province: "Gandaki", type: "provincial" },
            { name: "Ministry of Law, Communication and Provincial Assembly Affairs - Gandaki", url: "https://molcpa.gandaki.gov.np/", department: "Law, Communication & Assembly Affairs", province: "Gandaki", type: "provincial" },
            { name: "Ministry of Health and Population - Gandaki", url: "https://mohp.gandaki.gov.np/", department: "Health and Population", province: "Gandaki", type: "provincial" },

            // Lumbini Province
            { name: "Office of Chief Minister and Council of Ministers - Lumbini", url: "https://ocmcm.lumbini.gov.np/", department: "Chief Minister Office", province: "Lumbini", type: "provincial" },
            { name: "Ministry of Finance - Lumbini", url: "https://mof.lumbini.gov.np/", department: "Finance", province: "Lumbini", type: "provincial" },
            { name: "Ministry of Health and Population - Lumbini", url: "https://mohp.lumbini.gov.np/", department: "Health and Population", province: "Lumbini", type: "provincial" },

            // Karnali Province
            { name: "Office of Chief Minister and Council of Ministers - Karnali", url: "https://ocmcm.karnali.gov.np/", department: "Chief Minister Office", province: "Karnali", type: "provincial" },
            { name: "Ministry of Social Development - Karnali", url: "https://mosd.karnali.gov.np/", department: "Social Development", province: "Karnali", type: "provincial" },
            { name: "Ministry of Industry, Tourism, Forest and Environment - Karnali", url: "https://moitfe.karnali.gov.np/", department: "Industry, Tourism, Forest & Environment", province: "Karnali", type: "provincial" },

            // Sudurpashchim Province
            { name: "Office of Chief Minister and Council of Ministers - Sudurpashchim", url: "https://ocmcm.sudurpashchim.gov.np/", department: "Chief Minister Office", province: "Sudurpashchim", type: "provincial" },
            { name: "Ministry of Education and Social Development - Sudurpashchim", url: "https://mosd.sudurpashchim.gov.np/", department: "Education and Social Development", province: "Sudurpashchim", type: "provincial" },
            { name: "Ministry of Industry, Tourism, Forest and Environment - Sudurpashchim", url: "https://moitfe.sudurpashchim.gov.np/", department: "Industry, Tourism, Forest & Environment", province: "Sudurpashchim", type: "provincial" },
            { name: "Ministry of Home Affairs and Law - Sudurpashchim", url: "https://moial.sudurpashchim.gov.np/", department: "Home Affairs and Law", province: "Sudurpashchim", type: "provincial" },
        ];

        const resultsGrid = document.getElementById('resultsGrid');
        const searchInput = document.getElementById('searchInput');
        const resultsTitle = document.getElementById('resultsTitle');
        const provinceTags = document.querySelectorAll('.tag');

        let currentProvince = "";

        function renderItems(items) {
            resultsGrid.innerHTML = "";

            if (items.length === 0) {
                resultsGrid.innerHTML = '<div class="no-results">No matching ministries found</div>';
                return;
            }

            items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'result-card';

                const typeClass = item.type === 'central' ? 'central' : 'provincial';

                card.innerHTML = `
                    <div class="card-header">${item.name}</div>
                    <div class="card-body">
                        <span class="type-badge ${typeClass}">${item.type.toUpperCase()}</span>
                        <p><strong>Department:</strong> ${item.department}</p>
                        ${item.province ? `<p><strong>Province:</strong> ${item.province}</p>` : ''}
                        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="link-btn">Visit Official Website →</a>
                    </div>
                `;

                resultsGrid.appendChild(card);
            });
        }

        function filterItems() {
            const query = searchInput.value.toLowerCase().trim();

            const filtered = governmentData.filter(item => {
                const matchesSearch = 
                    item.name.toLowerCase().includes(query) ||
                    item.department.toLowerCase().includes(query);

                const matchesProvince = currentProvince === "" 
                    ? item.type === "central" 
                    : item.province === currentProvince;

                return matchesSearch && matchesProvince;
            });

            resultsTitle.textContent = currentProvince 
                ? `${currentProvince} Province Ministries & Offices` 
                : (query ? `Found ${filtered.length}` : "All Central Ministries & Agencies");

            renderItems(filtered);
        }

        document.getElementById('searchForm').addEventListener('submit', e => {
            e.preventDefault();
            filterItems();
        });

        searchInput.addEventListener('input', filterItems);

        provinceTags.forEach(tag => {
            tag.addEventListener('click', () => {
                provinceTags.forEach(t => t.classList.remove('active'));
                tag.classList.add('active');
                currentProvince = tag.dataset.province;
                filterItems();
            });
        });

        // Initial render: show central only
        renderItems(governmentData.filter(item => item.type === "central"));
   