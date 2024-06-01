
    window.onload = function() {
        alert("제목을 눌러보세요");
    };
        // 사이드 바와 오버레이 요소를 선택합니다.
        const sidebar = document.getElementById('sidebar');

        // 햄버거 아이콘을 선택합니다.
        const menuToggle = document.getElementById('toggleSidebar');

        // 다른 동물 보러가기 버튼을 선택합니다.
        const toggleOtherAnimals = document.getElementById('toggle_other_animals');
        const otherAnimalsList = document.getElementById('other_animals_list');

        // 햄버거 아이콘 클릭 시 사이드 바를 토글합니다.
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            blurOverlay.classList.toggle('visible'); // 오버레이 표시/숨김 토글
            if (sidebar.classList.contains('open')) {
                sidebar.classList.remove('closed');
            } else {
                sidebar.classList.add('closed');
            }
        });

        // 다른 동물 보러가기 버튼을 클릭 시 다른 동물 목록을 토글합니다.
        document.getElementById('toggle_other_animals').addEventListener('click', function () {
            var otherAnimalsList = document.getElementById('other_animals_list');
            if (otherAnimalsList.style.display === 'none') {
                otherAnimalsList.style.display = 'block';
            } else {
                otherAnimalsList.style.display = 'none';
            }
        });


        // 오버레이를 클릭 시 사이드 바를 닫습니다.
        blurOverlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            blurOverlay.classList.remove('visible');
        });
        
       
