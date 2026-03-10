// === DADOS INICIAIS (Extraídos do arquivo TXT) ===
const seedData = [
    { id: "1.1", desc: "VALVULA GAVETA", dn: "75", material: "F°F°", unid: "UN" },
    { id: "1.2", desc: "VALVULA GAVETA", dn: "100", material: "F°F°", unid: "UN" },
    { id: "1.3", desc: "VALVULA GAVETA", dn: "150", material: "F°F°", unid: "UN" },
    { id: "1.4", desc: "VALVULA GAVETA", dn: "200", material: "F°F°", unid: "UN" },
    { id: "1.5", desc: "VALVULA GAVETA", dn: "250", material: "F°F°", unid: "UN" },
    { id: "1.6", desc: "VALVULA GAVETA", dn: "300", material: "F°F°", unid: "UN" },
    { id: "1.7", desc: "VALVULA GAVETA", dn: "350", material: "F°F°", unid: "UN" },
    { id: "1.8", desc: "VALVULA GAVETA", dn: "400", material: "F°F°", unid: "UN" },
    { id: "2.1", desc: "TÊ FLANGEADO", dn: "75X75", material: "F°F°", unid: "UN" },
    { id: "2.2", desc: "TÊ FLANGEADO", dn: "100X100", material: "F°F°", unid: "UN" },
    { id: "2.3", desc: "TÊ FLANGEADO", dn: "150X150", material: "F°F°", unid: "UN" },
    { id: "2.4", desc: "TÊ FLANGEADO", dn: "200X200", material: "F°F°", unid: "UN" },
    { id: "2.5", desc: "TÊ FLANGEADO", dn: "250X250", material: "F°F°", unid: "UN" },
    { id: "2.6", desc: "TÊ FLANGEADO", dn: "300X300", material: "F°F°", unid: "UN" },
    { id: "3.1", desc: "TÊ ELETROFUSÃO", dn: "110X110", material: "PEAD", unid: "UN" },
    { id: "3.2", desc: "TÊ ELETROFUSÃO", dn: "160X160", material: "PEAD", unid: "UN" },
    { id: "3.3", desc: "TÊ ELETROFUSÃO", dn: "200X200", material: "PEAD", unid: "UN" },
    { id: "3.4", desc: "TÊ ELETROFUSÃO", dn: "250X250", material: "PEAD", unid: "UN" },
    { id: "3.5", desc: "TÊ ELETROFUSÃO", dn: "300X300", material: "PEAD", unid: "UN" },
    { id: "3.6", desc: "TÊ ELETROFUSÃO", dn: "200X160", material: "PEAD", unid: "UN" },
    { id: "3.7", desc: "TÊ ELETROFUSÃO", dn: "160X110", material: "PEAD", unid: "UN" },
    { id: "5.1", desc: "TÊ COM BOLSAS E FLANGE - JTE", dn: "150X100", material: "F°F°", unid: "UN" },
    { id: "5.2", desc: "TÊ COM BOLSAS E FLANGE - JTE", dn: "200X100", material: "F°F°", unid: "UN" },
    { id: "5.3", desc: "TÊ COM BOLSAS E FLANGE - JTE", dn: "300X100", material: "F°F°", unid: "UN" },
    { id: "5.4", desc: "TÊ COM BOLSAS E FLANGE - JTE", dn: "300X150", material: "F°F°", unid: "UN" },
    { id: "7.1", desc: "CURVA ELETROFUSÃO", dn: "110", material: "PEAD", unid: "UN" },
    { id: "7.2", desc: "CURVA ELETROFUSÃO", dn: "160", material: "PEAD", unid: "UN" },
    { id: "7.3", desc: "CURVA ELETROFUSÃO", dn: "200", material: "PEAD", unid: "UN" },
    { id: "7.4", desc: "CURVA ELETROFUSÃO", dn: "250", material: "PEAD", unid: "UN" },
    { id: "7.5", desc: "CURVA ELETROFUSÃO", dn: "300", material: "PEAD", unid: "UN" },
    { id: "9.1", desc: "FLANGE SOLTA P/ COLARINHO", dn: "100", material: "F°F°", unid: "UN" },
    { id: "9.2", desc: "FLANGE SOLTA P/ COLARINHO", dn: "150", material: "F°F°", unid: "UN" },
    { id: "9.3", desc: "FLANGE SOLTA P/ COLARINHO", dn: "200", material: "F°F°", unid: "UN" },
    { id: "9.4", desc: "FLANGE SOLTA P/ COLARINHO", dn: "250", material: "F°F°", unid: "UN" },
    { id: "9.5", desc: "FLANGE SOLTA P/ COLARINHO", dn: "300", material: "F°F°", unid: "UN" },
    { id: "10.1", desc: "COLARINHO", dn: "110", material: "PEAD", unid: "UN" },
    { id: "10.2", desc: "COLARINHO", dn: "160", material: "PEAD", unid: "UN" },
    { id: "10.3", desc: "COLARINHO", dn: "200", material: "PEAD", unid: "UN" },
    { id: "11.1", desc: "LUVA DE CORRER JUNTA MECANICA", dn: "75", material: "F°F°", unid: "UN" },
    { id: "11.2", desc: "LUVA DE CORRER JUNTA MECANICA", dn: "100", material: "F°F°", unid: "UN" },
    { id: "11.3", desc: "LUVA DE CORRER JUNTA MECANICA", dn: "150", material: "F°F°", unid: "UN" },
    { id: "12.1", desc: "LUVA JUNTA MECANICA", dn: "150", material: "F°F°", unid: "UN" },
    { id: "12.2", desc: "LUVA JUNTA MECANICA", dn: "200", material: "F°F°", unid: "UN" },
    { id: "12.3", desc: "LUVA JUNTA MECANICA", dn: "300", material: "F°F°", unid: "UN" },
    { id: "13.1", desc: "LUVA ELETROFUSÃO", dn: "110", material: "PEAD", unid: "UN" },
    { id: "13.2", desc: "LUVA ELETROFUSÃO", dn: "160", material: "PEAD", unid: "UN" },
    { id: "14.1", desc: "TOCO PONTA FLANGE", dn: "75", material: "F°F°", unid: "UN" },
    { id: "14.2", desc: "TOCO PONTA FLANGE", dn: "100", material: "F°F°", unid: "UN" },
    { id: "14.3", desc: "TOCO PONTA FLANGE", dn: "150", material: "F°F°", unid: "UN" },
    { id: "15.1", desc: "REDUÇÃO FLANGEADA", dn: "100X75", material: "F°F°", unid: "UN" },
    { id: "15.2", desc: "REDUÇÃO FLANGEADA", dn: "150X75", material: "F°F°", unid: "UN" },
    { id: "15.3", desc: "REDUÇÃO FLANGEADA", dn: "150X100", material: "F°F°", unid: "UN" },
    { id: "16.1", desc: "REDUÇÃO CONCENTRICA", dn: "160X110", material: "PEAD", unid: "UN" },
    { id: "18.1", desc: "EXTENSÃO DE REDE", dn: "110", material: "PEAD", unid: "M" },
    { id: "18.2", desc: "EXTENSÃO DE REDE", dn: "160", material: "PEAD", unid: "M" },
    { id: "18.3", desc: "EXTENSÃO DE REDE", dn: "200", material: "PEAD", unid: "M" }
];

// === VARIÁVEIS DE ESTADO ===
let database = [];
let exportCart = [];
let uniqueDescriptions = [];

// Variáveis dos Blocos (Kits)
let kitsDatabase = [];
let currentKitId = null;
let currentKitParts = [];
let listFilterMode = 'pecas'; 

// Variáveis de Projetos SMR
let smrDatabase = [];
let currentSmrId = null;
let currentSmrParts = [];
let listFilterModeSMR = 'pecas';
let expandedSMR = new Set();

// Variáveis de Expansão (Acordeão)
let expandedGerar = new Set();
let expandedDB = new Set();

// === INICIALIZAÇÃO ===
window.onload = () => {
    lucide.createIcons();
    loadDatabase();
    renderSelectionList();
    renderSelectionListSMR();
    renderDatabase();
    renderExportList();
    renderSMRProjects();
    renderKitsList();
};

// === GERENCIAMENTO DE DADOS ===
function loadDatabase() {
    const savedData = localStorage.getItem('autocad_pecas_db');
    if (savedData) {
        database = JSON.parse(savedData);
        updateUniqueDescriptions();
    } else {
        database = [...seedData];
        saveDatabase();
    }

    const savedKits = localStorage.getItem('autocad_pecas_kits');
    if (savedKits) {
        kitsDatabase = JSON.parse(savedKits);
    }

    // Migração/Carregamento SMR
    const savedSMRDb = localStorage.getItem('autocad_pecas_smr_db');
    if (savedSMRDb) {
        smrDatabase = JSON.parse(savedSMRDb);
    } else {
        const savedOldSMR = localStorage.getItem('autocad_pecas_smr');
        if (savedOldSMR) {
            const oldCart = JSON.parse(savedOldSMR);
            if (oldCart.length > 0) {
                smrDatabase.push({
                    id: 'SMR_' + Date.now(),
                    name: 'PROJETO SMR ANTIGO',
                    parts: oldCart
                });
            }
            localStorage.removeItem('autocad_pecas_smr');
            saveSMRDatabase();
        }
    }
}

function saveDatabase() {
    localStorage.setItem('autocad_pecas_db', JSON.stringify(database));
    localStorage.setItem('autocad_pecas_kits', JSON.stringify(kitsDatabase));
    updateUniqueDescriptions();
}

function saveSMRDatabase() {
    localStorage.setItem('autocad_pecas_smr_db', JSON.stringify(smrDatabase));
}

function updateUniqueDescriptions() {
    const descs = database.map(p => p.desc);
    uniqueDescriptions = [...new Set(descs)].sort();
}

function resetDatabase() {
    if(confirm("Tem certeza que deseja apagar todas as peças cadastradas e voltar ao estado original?")) {
        database = [...seedData];
        saveDatabase();
        renderSelectionList();
        renderDatabase();
        showToast("Banco de dados restaurado!", "success");
    }
}

// === NAVEGAÇÃO ENTRE ABAS ===
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.tab-btn').forEach(el => {
        el.classList.remove('bg-blue-600', 'text-white');
        el.classList.add('text-blue-100', 'hover:bg-blue-700/50');
    });

    document.getElementById(tabId).classList.remove('hidden');
    const activeBtn = document.getElementById(`btn-${tabId}`);
    activeBtn.classList.remove('text-blue-100', 'hover:bg-blue-700/50');
    activeBtn.classList.add('bg-blue-600', 'text-white');
}

// === LÓGICA DO SETOR SMR ===
function setSMRFilter(mode) {
    listFilterModeSMR = mode;
    const btnPecas = document.getElementById('filter-pecas-smr');
    const btnBlocos = document.getElementById('filter-blocos-smr');
    
    if(mode === 'pecas') {
        btnPecas.className = "flex-1 py-1.5 text-sm font-medium rounded-md bg-orange-600 text-white transition-colors shadow-sm";
        btnBlocos.className = "flex-1 py-1.5 text-sm font-medium rounded-md bg-slate-200 text-slate-600 hover:bg-slate-300 transition-colors";
    } else {
        btnBlocos.className = "flex-1 py-1.5 text-sm font-medium rounded-md bg-purple-600 text-white transition-colors shadow-sm";
        btnPecas.className = "flex-1 py-1.5 text-sm font-medium rounded-md bg-slate-200 text-slate-600 hover:bg-slate-300 transition-colors";
    }
    filterSelectionListSMR();
}

function renderSelectionListSMR() {
    filterSelectionListSMR();
}

function toggleSMR(desc) {
    if(expandedSMR.has(desc)) expandedSMR.delete(desc);
    else expandedSMR.add(desc);
    filterSelectionListSMR();
}

function filterSelectionListSMR() {
    const search = document.getElementById('searchInputSMR').value.toLowerCase();
    const container = document.getElementById('selection-list-smr');
    container.innerHTML = '';

    if(listFilterModeSMR === 'pecas') {
        const filtered = database.filter(p => p.id.toLowerCase().includes(search) || p.desc.toLowerCase().includes(search) || p.dn.toLowerCase().includes(search));
        if(filtered.length === 0) return container.innerHTML = `<p class="text-sm text-slate-500 text-center py-4">Nenhuma peça encontrada.</p>`;

        const grouped = {};
        filtered.forEach(p => {
            if(!grouped[p.desc]) grouped[p.desc] = [];
            grouped[p.desc].push(p);
        });

        const isSearching = search.length > 0;
        const sortedDescs = Object.keys(grouped).sort((a, b) => {
            const numA = parseInt(grouped[a][0].id.split('.')[0]) || 0;
            const numB = parseInt(grouped[b][0].id.split('.')[0]) || 0;
            return numA - numB;
        });

        sortedDescs.forEach(desc => {
            const items = grouped[desc];
            const isExpanded = isSearching || expandedSMR.has(desc);
            const primaryNum = items[0].id.split('.')[0];
            
            const headerDiv = document.createElement('div');
            headerDiv.className = "p-3 bg-slate-100 border border-slate-200 rounded-lg flex justify-between items-center cursor-pointer hover:bg-slate-200 transition-colors mb-1 shadow-sm";
            headerDiv.onclick = () => toggleSMR(desc);
            headerDiv.innerHTML = `
                <span class="font-bold text-slate-700 text-sm flex items-center gap-2">
                    <i data-lucide="folder-open" class="w-4 h-4 text-orange-500"></i> 
                    <span class="bg-orange-100 text-orange-800 text-xs font-bold px-2 py-0.5 rounded">${primaryNum}</span>
                    ${desc}
                </span>
                <div class="flex items-center gap-2">
                    <span class="text-xs text-slate-500 font-medium bg-white px-2 py-0.5 rounded border border-slate-200">${items.length} itens</span>
                    <i data-lucide="${isExpanded ? 'chevron-down' : 'chevron-right'}" class="w-4 h-4 text-slate-500"></i>
                </div>
            `;
            container.appendChild(headerDiv);

            if(isExpanded) {
                const itemsContainer = document.createElement('div');
                itemsContainer.className = "pl-3 border-l-2 border-slate-200 ml-2 mb-3 space-y-1.5 mt-1";
                
                items.sort((a, b) => {
                    const secA = parseInt(a.id.split('.')[1]) || 0;
                    const secB = parseInt(b.id.split('.')[1]) || 0;
                    return secA - secB;
                }).forEach(p => {
                    const inCart = currentSmrId ? currentSmrParts.some(item => item.part.id === p.id) : false;
                    const itemDiv = document.createElement('div');
                    itemDiv.className = `p-2 rounded border flex justify-between items-center transition-all ${inCart ? 'bg-orange-50 border-orange-200' : 'bg-white border-slate-200 hover:border-orange-300'}`;
                    
                    itemDiv.innerHTML = `
                        <div class="flex-grow pr-2">
                            <div class="flex items-center gap-2">
                                <span class="bg-slate-200 text-slate-700 text-[10px] font-bold px-1.5 py-0.5 rounded">${p.id}</span>
                                <span class="text-xs text-slate-600"><strong>DN:</strong> ${p.dn} <span class="text-slate-300 mx-1">|</span> <strong>Mat:</strong> ${p.material}</span>
                            </div>
                        </div>
                        <button onclick="addToSMR('${p.id}', 'peca')" ${inCart ? 'disabled' : ''} class="shrink-0 w-7 h-7 rounded flex items-center justify-center transition-colors ${inCart ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 hover:bg-orange-600 hover:text-white text-slate-600'}">
                            <i data-lucide="${inCart ? 'check' : 'plus'}" class="w-3.5 h-3.5"></i>
                        </button>
                    `;
                    itemsContainer.appendChild(itemDiv);
                });
                container.appendChild(itemsContainer);
            }
        });

    } else {
        const filtered = kitsDatabase.filter(k => k.name.toLowerCase().includes(search));
        if(filtered.length === 0) return container.innerHTML = `<p class="text-sm text-slate-500 text-center py-4">Nenhum bloco encontrado.</p>`;

        filtered.forEach(k => {
            const div = document.createElement('div');
            div.className = `p-3 mb-2 rounded-lg border bg-white border-slate-200 hover:border-purple-300 flex justify-between items-center transition-all`;
            
            div.innerHTML = `
                <div class="flex-grow pr-4 flex items-center gap-3">
                    <div class="w-12 h-12 bg-purple-100 border border-purple-200 rounded flex items-center justify-center text-purple-600 shrink-0"><i data-lucide="layers" class="w-6 h-6"></i></div>
                    <div class="min-w-0">
                        <div class="font-semibold text-sm text-slate-800 truncate">${k.name}</div>
                        <div class="text-xs text-purple-600 font-medium">${k.parts.length} peças neste bloco</div>
                    </div>
                </div>
                <button onclick="addToSMR('${k.id}', 'bloco')" title="Inserir peças do bloco" class="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-purple-100 hover:bg-orange-600 hover:text-white text-purple-600">
                    <i data-lucide="layers" class="w-4 h-4"></i>
                </button>
            `;
            container.appendChild(div);
        });
    }
    lucide.createIcons();
}

// Funções de Gerenciamento de Múltiplos SMRs
function createNewSMR() {
    currentSmrId = 'SMR_' + Date.now();
    currentSmrParts = [];
    document.getElementById('smr-name').value = '';
    
    document.getElementById('smr-view-list').classList.add('hidden');
    document.getElementById('smr-view-editor').classList.remove('hidden');
    
    renderSMRPartsList();
    filterSelectionListSMR();
    
    setTimeout(() => document.getElementById('smr-name').focus(), 100);
}

function openSMR(id) {
    const smr = smrDatabase.find(s => s.id === id);
    if(!smr) return;
    
    currentSmrId = smr.id;
    currentSmrParts = JSON.parse(JSON.stringify(smr.parts));
    document.getElementById('smr-name').value = smr.name;
    
    document.getElementById('smr-view-list').classList.add('hidden');
    document.getElementById('smr-view-editor').classList.remove('hidden');
    
    renderSMRPartsList();
    filterSelectionListSMR();
}

function closeSMR(skipSave = false) {
    if(!skipSave && currentSmrId) {
        saveCurrentSMR(true);
    }
    currentSmrId = null;
    document.getElementById('smr-view-editor').classList.add('hidden');
    document.getElementById('smr-view-list').classList.remove('hidden');
    
    renderSMRProjects();
    filterSelectionListSMR(); 
}

function saveCurrentSMR(silent = false) {
    if(!currentSmrId) return;
    
    let name = document.getElementById('smr-name').value.trim().toUpperCase();
    if(!name) name = "SMR SEM NOME";

    const smrData = { id: currentSmrId, name: name, parts: currentSmrParts };
    const index = smrDatabase.findIndex(s => s.id === currentSmrId);
    
    if(index >= 0) smrDatabase[index] = smrData;
    else smrDatabase.push(smrData);

    saveSMRDatabase();
    if(!silent) showToast("Projeto SMR salvo com sucesso!");
}

function deleteCurrentSMR() {
    if(confirm("Tem certeza que deseja EXCLUIR todo este projeto SMR?")) {
        smrDatabase = smrDatabase.filter(s => s.id !== currentSmrId);
        saveSMRDatabase();
        closeSMR(true); 
        showToast("Projeto excluído.");
    }
}

function renderSMRProjects() {
    const container = document.getElementById('smr-projects-container');
    container.innerHTML = '';

    if(smrDatabase.length === 0) {
        container.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-slate-400 opacity-70 py-10">
                <i data-lucide="folder-plus" class="w-16 h-16 mb-2 text-orange-300"></i>
                <p>Nenhum projeto SMR criado ainda.</p>
                <p class="text-sm mt-1">Clique em "Novo" para iniciar um levantamento.</p>
            </div>`;
        lucide.createIcons();
        return;
    }

    [...smrDatabase].reverse().forEach(smr => {
        const div = document.createElement('div');
        div.className = "bg-white p-4 rounded-lg border border-slate-200 hover:border-orange-400 shadow-sm cursor-pointer transition-all flex justify-between items-center group";
        div.onclick = () => openSMR(smr.id);
        
        div.innerHTML = `
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded bg-orange-100 text-orange-600 flex items-center justify-center">
                    <i data-lucide="map" class="w-6 h-6"></i>
                </div>
                <div>
                    <h3 class="font-bold text-slate-800 text-base">${smr.name}</h3>
                    <p class="text-xs font-medium text-slate-500 mt-0.5">${smr.parts.length} tipos de peças registradas</p>
                </div>
            </div>
            <div class="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <i data-lucide="arrow-right" class="w-5 h-5"></i>
            </div>
        `;
        container.appendChild(div);
    });
    lucide.createIcons();
}

function addToSMR(id, type = 'peca') {
    if(!currentSmrId) {
        showToast("Abra ou crie um Projeto SMR primeiro!", "error");
        return;
    }

    if(type === 'peca') {
        const part = database.find(p => p.id === id);
        if (!part || currentSmrParts.some(item => item.part.id === id)) return;
        currentSmrParts.push({ part: part, qtde: 1, obs: "-" });
    } else {
        const kit = kitsDatabase.find(k => k.id === id);
        if (!kit) return;
        
        let added = 0;
        kit.parts.forEach(kp => {
            const part = database.find(p => p.id === kp.id);
            if (part) {
                const existing = currentSmrParts.find(item => item.part.id === part.id);
                if (existing) {
                    existing.qtde = parseFloat(existing.qtde) + parseFloat(kp.qtde);
                    existing.obs = existing.obs === "-" ? `+ ${kit.name}` : existing.obs + `, + ${kit.name}`;
                } else {
                    currentSmrParts.push({ part: part, qtde: kp.qtde, obs: `Bloco: ${kit.name}` });
                }
                added++;
            }
        });
        showToast(`${added} tipos de peças do bloco adicionadas!`, "success");
    }
    
    saveCurrentSMR(true);
    renderSMRPartsList();
    if(listFilterModeSMR === 'pecas') filterSelectionListSMR(); 
}

function removeFromSMR(id) {
    currentSmrParts = currentSmrParts.filter(item => item.part.id !== id);
    saveCurrentSMR(true);
    filterSelectionListSMR();
    renderSMRPartsList();
}

function updateSMRItem(id, field, value) {
    const item = currentSmrParts.find(i => i.part.id === id);
    if(item) {
        item[field] = value;
        saveCurrentSMR(true);
    }
}

function renderSMRPartsList() {
    const container = document.getElementById('smr-parts-list');
    const counter = document.getElementById('smr-count');
    
    counter.textContent = `${currentSmrParts.length} item${currentSmrParts.length !== 1 ? 's' : ''}`;

    if(currentSmrParts.length === 0) {
        container.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-slate-400 opacity-70">
                <i data-lucide="package-open" class="w-16 h-16 mb-2 text-orange-300"></i>
                <p>Nenhuma peça neste projeto.</p>
                <p class="text-sm">Selecione peças ou blocos na lista ao lado.</p>
            </div>`;
        lucide.createIcons();
        return;
    }

    container.innerHTML = '';
    currentSmrParts.forEach((item) => {
        const div = document.createElement('div');
        div.className = "bg-white p-3 mb-3 rounded-lg border border-orange-100 shadow-sm relative pr-10 border-l-4 border-l-orange-500";
        
        div.innerHTML = `
            <div class="mb-2">
                <span class="text-orange-600 font-bold text-sm mr-2">${item.part.id}</span>
                <span class="font-semibold text-sm text-slate-800">${item.part.desc} - DN ${item.part.dn}</span>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div class="sm:col-span-1">
                    <label class="block text-xs text-slate-500 mb-1">Quantidade</label>
                    <div class="flex items-center">
                        <input type="number" min="1" step="1" value="${item.qtde}" onchange="updateSMRItem('${item.part.id}', 'qtde', this.value)" class="w-full px-2 py-1.5 border border-slate-300 rounded-l focus:outline-none focus:border-orange-500 text-sm">
                        <span class="bg-slate-100 border border-l-0 border-slate-300 px-2 py-1.5 rounded-r text-xs font-semibold text-slate-600">${item.part.unid}</span>
                    </div>
                </div>
                <div class="sm:col-span-2">
                    <label class="block text-xs text-slate-500 mb-1">Observação / Local</label>
                    <input type="text" value="${item.obs}" onchange="updateSMRItem('${item.part.id}', 'obs', this.value)" class="w-full px-2 py-1.5 border border-slate-300 rounded focus:outline-none focus:border-orange-500 text-sm" placeholder="Opcional">
                </div>
            </div>

            <button onclick="removeFromSMR('${item.part.id}')" class="absolute top-3 right-3 text-slate-300 hover:text-red-500 transition-colors">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>
        `;
        container.appendChild(div);
    });
    lucide.createIcons();
}

function exportSMRToExcel() {
    if(currentSmrParts.length === 0) {
        showToast("A lista deste SMR está vazia.", "error");
        return;
    }

    let projectName = document.getElementById('smr-name').value.trim();
    if(!projectName) projectName = "SMR";

    const excelData = currentSmrParts.map(item => ({
        "N°": item.part.id,
        "DESCRIÇÃO": item.part.desc,
        "DN": item.part.dn,
        "MATERIAL": item.part.material,
        "UNID.": item.part.unid,
        "QTDE": parseFloat(item.qtde),
        "OBS": item.obs === "-" ? "" : item.obs
    }));

    const ws = XLSX.utils.json_to_sheet(excelData);
    const wscols = [ {wch: 8}, {wch: 35}, {wch: 12}, {wch: 12}, {wch: 8}, {wch: 10}, {wch: 25} ];
    ws['!cols'] = wscols;

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, projectName);
    
    const dateStr = new Date().toISOString().slice(0,10).replace(/-/g, "");
    const safeName = projectName.replace(/[^a-z0-9]/gi, '_').toUpperCase();
    
    XLSX.writeFile(wb, `Lista_${safeName}_${dateStr}.xlsx`);
    
    showToast("Planilha do SMR gerada com sucesso!", "success");
}

// === GERENCIAMENTO DE BLOCOS (KITS) ===
function createNewKit() {
    currentKitId = 'B' + Date.now();
    currentKitParts = [];
    document.getElementById('kit-name').value = '';
    renderKitParts();
    
    document.getElementById('kit-placeholder').style.display = 'none';
    document.getElementById('kit-editor-container').style.display = 'flex';
}

function editKit(id) {
    const kit = kitsDatabase.find(k => k.id === id);
    if(!kit) return;
    
    currentKitId = kit.id;
    currentKitParts = JSON.parse(JSON.stringify(kit.parts));
    document.getElementById('kit-name').value = kit.name;
    
    document.getElementById('kit-placeholder').style.display = 'none';
    document.getElementById('kit-editor-container').style.display = 'flex';
    
    renderKitParts();
}

function deleteKit(id, event) {
    event.stopPropagation();
    if(confirm("Deseja realmente excluir este bloco?")) {
        kitsDatabase = kitsDatabase.filter(k => k.id !== id);
        saveDatabase();
        if(currentKitId === id) {
            document.getElementById('kit-placeholder').style.display = 'flex';
            document.getElementById('kit-editor-container').style.display = 'none';
        }
        renderKitsList();
        if(listFilterMode === 'blocos') renderSelectionList();
        showToast("Bloco excluído!");
    }
}

function saveCurrentKit() {
    const name = document.getElementById('kit-name').value.trim().toUpperCase();
    if(!name) return showToast("Dê um nome ao bloco!", "error");
    if(currentKitParts.length === 0) return showToast("Adicione peças ao bloco!", "error");
    
    const kitData = { id: currentKitId, name: name, parts: currentKitParts };
    const index = kitsDatabase.findIndex(k => k.id === currentKitId);
    if(index >= 0) kitsDatabase[index] = kitData;
    else kitsDatabase.push(kitData);

    saveDatabase();
    renderKitsList();
    if(listFilterMode === 'blocos') renderSelectionList();
    showToast("Bloco salvo com sucesso!");
}

function renderKitsList() {
    const search = document.getElementById('kitSearchInput').value.toLowerCase();
    const container = document.getElementById('kits-list');
    container.innerHTML = '';
    const filtered = kitsDatabase.filter(k => k.name.toLowerCase().includes(search));

    if(filtered.length === 0) return container.innerHTML = `<p class="text-sm text-slate-500 text-center py-4">Nenhum bloco salvo.</p>`;

    filtered.forEach(k => {
        const div = document.createElement('div');
        const isActive = currentKitId === k.id;
        div.className = `p-3 mb-2 rounded-lg border cursor-pointer flex justify-between items-center transition-all ${isActive ? 'bg-purple-50 border-purple-300' : 'bg-white border-slate-200 hover:border-purple-200'}`;
        div.onclick = () => editKit(k.id);
        
        div.innerHTML = `
            <div class="flex-grow pr-2 truncate">
                <span class="font-semibold text-sm text-slate-800">${k.name}</span>
                <div class="text-xs text-slate-500">${k.parts.length} peça(s)</div>
            </div>
            <button onclick="deleteKit('${k.id}', event)" class="shrink-0 text-slate-400 hover:text-red-500 p-1">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
        `;
        container.appendChild(div);
    });
    lucide.createIcons();
}

function showKitPartDropdown() {
    const dropdown = document.getElementById('kit-parts-dropdown');
    dropdown.classList.remove('hidden');
    filterKitPartsToAdd();
}

function hideKitPartDropdown() {
    document.getElementById('kit-parts-dropdown').classList.add('hidden');
}

function filterKitPartsToAdd() {
    const search = document.getElementById('kitPartSearch').value.toLowerCase();
    const dropdown = document.getElementById('kit-parts-dropdown');
    
    const filtered = database.filter(p => p.id.toLowerCase().includes(search) || p.desc.toLowerCase().includes(search) || p.dn.toLowerCase().includes(search)).slice(0, 50);
    
    dropdown.innerHTML = '';
    if(filtered.length === 0) dropdown.innerHTML = '<div class="p-2 text-xs text-slate-500">Peça não encontrada.</div>';
    else {
        filtered.forEach(p => {
            const div = document.createElement('div');
            div.className = 'p-2 border-b border-slate-100 hover:bg-purple-50 cursor-pointer text-xs flex justify-between items-center transition-colors';
            div.innerHTML = `
                <div class="flex flex-col">
                    <span class="font-bold text-slate-700">${p.id}</span>
                    <span class="text-slate-600">${p.desc} (DN ${p.dn})</span>
                </div>
                <span class="bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-[10px] text-slate-500 whitespace-nowrap font-medium">${p.material}</span>
            `;
            div.onclick = () => {
                const existing = currentKitParts.find(kp => kp.id === p.id);
                if(existing) existing.qtde += 1;
                else currentKitParts.push({ id: p.id, qtde: 1 });
                
                document.getElementById('kitPartSearch').value = '';
                dropdown.classList.add('hidden');
                renderKitParts();
            };
            dropdown.appendChild(div);
        });
    }
    dropdown.classList.remove('hidden');
}

function removePartFromKit(partId) {
    currentKitParts = currentKitParts.filter(p => p.id !== partId);
    renderKitParts();
}

function updateKitPartQtde(partId, val) {
    const p = currentKitParts.find(p => p.id === partId);
    if(p) p.qtde = parseFloat(val) || 1;
}

function renderKitParts() {
    const tbody = document.getElementById('kit-parts-list');
    const empty = document.getElementById('kit-parts-empty');
    tbody.innerHTML = '';
    
    if(currentKitParts.length === 0) {
        empty.style.display = 'block';
        return;
    }
    
    empty.style.display = 'none';
    currentKitParts.forEach(kp => {
        const partInfo = database.find(d => d.id === kp.id) || { desc: "Removida do BD", dn: "-", unid: "-" };
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="p-2 border-b font-medium text-xs text-slate-700">${kp.id}</td>
            <td class="p-2 border-b text-xs text-slate-600 truncate max-w-[150px]">${partInfo.desc}</td>
            <td class="p-2 border-b">
                <input type="number" min="1" step="1" value="${kp.qtde}" onchange="updateKitPartQtde('${kp.id}', this.value)" class="w-16 px-1 py-1 border border-slate-300 rounded focus:outline-none focus:border-purple-500 text-xs text-center">
            </td>
            <td class="p-2 border-b text-right">
                <button onclick="removePartFromKit('${kp.id}')" class="text-slate-400 hover:text-red-500">
                    <i data-lucide="x" class="w-4 h-4"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

// === ABA: GERAR LISTA (EXCEL) ===
function setGerarFilter(mode) {
    listFilterMode = mode;
    const btnPecas = document.getElementById('filter-pecas');
    const btnBlocos = document.getElementById('filter-blocos');
    
    if(mode === 'pecas') {
        btnPecas.className = "flex-1 py-1.5 text-sm font-medium rounded-md bg-blue-600 text-white transition-colors shadow-sm";
        btnBlocos.className = "flex-1 py-1.5 text-sm font-medium rounded-md bg-slate-200 text-slate-600 hover:bg-slate-300 transition-colors";
    } else {
        btnBlocos.className = "flex-1 py-1.5 text-sm font-medium rounded-md bg-purple-600 text-white transition-colors shadow-sm";
        btnPecas.className = "flex-1 py-1.5 text-sm font-medium rounded-md bg-slate-200 text-slate-600 hover:bg-slate-300 transition-colors";
    }
    filterSelectionList();
}

function renderSelectionList() {
    filterSelectionList();
}

function toggleGerar(desc) {
    if(expandedGerar.has(desc)) expandedGerar.delete(desc);
    else expandedGerar.add(desc);
    filterSelectionList();
}

function filterSelectionList() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const container = document.getElementById('selection-list');
    container.innerHTML = '';

    if(listFilterMode === 'pecas') {
        const filtered = database.filter(p => p.id.toLowerCase().includes(search) || p.desc.toLowerCase().includes(search) || p.dn.toLowerCase().includes(search));
        if(filtered.length === 0) return container.innerHTML = `<p class="text-sm text-slate-500 text-center py-4">Nenhuma peça encontrada.</p>`;

        const grouped = {};
        filtered.forEach(p => {
            if(!grouped[p.desc]) grouped[p.desc] = [];
            grouped[p.desc].push(p);
        });

        const isSearching = search.length > 0;
        const sortedDescs = Object.keys(grouped).sort((a, b) => {
            const numA = parseInt(grouped[a][0].id.split('.')[0]) || 0;
            const numB = parseInt(grouped[b][0].id.split('.')[0]) || 0;
            return numA - numB;
        });

        sortedDescs.forEach(desc => {
            const items = grouped[desc];
            const isExpanded = isSearching || expandedGerar.has(desc);
            const primaryNum = items[0].id.split('.')[0];
            
            const headerDiv = document.createElement('div');
            headerDiv.className = "p-3 bg-slate-100 border border-slate-200 rounded-lg flex justify-between items-center cursor-pointer hover:bg-slate-200 transition-colors mb-1 shadow-sm";
            headerDiv.onclick = () => toggleGerar(desc);
            headerDiv.innerHTML = `
                <span class="font-bold text-slate-700 text-sm flex items-center gap-2">
                    <i data-lucide="folder-open" class="w-4 h-4 text-blue-500"></i> 
                    <span class="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded">${primaryNum}</span>
                    ${desc}
                </span>
                <div class="flex items-center gap-2">
                    <span class="text-xs text-slate-500 font-medium bg-white px-2 py-0.5 rounded border border-slate-200">${items.length} itens</span>
                    <i data-lucide="${isExpanded ? 'chevron-down' : 'chevron-right'}" class="w-4 h-4 text-slate-500"></i>
                </div>
            `;
            container.appendChild(headerDiv);

            if(isExpanded) {
                const itemsContainer = document.createElement('div');
                itemsContainer.className = "pl-3 border-l-2 border-slate-200 ml-2 mb-3 space-y-1.5 mt-1";
                
                items.sort((a, b) => {
                    const secA = parseInt(a.id.split('.')[1]) || 0;
                    const secB = parseInt(b.id.split('.')[1]) || 0;
                    return secA - secB;
                }).forEach(p => {
                    const inCart = exportCart.some(item => item.part.id === p.id);
                    const itemDiv = document.createElement('div');
                    itemDiv.className = `p-2 rounded border flex justify-between items-center transition-all ${inCart ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-200 hover:border-blue-300'}`;
                    
                    itemDiv.innerHTML = `
                        <div class="flex-grow pr-2">
                            <div class="flex items-center gap-2">
                                <span class="bg-slate-200 text-slate-700 text-[10px] font-bold px-1.5 py-0.5 rounded">${p.id}</span>
                                <span class="text-xs text-slate-600"><strong>DN:</strong> ${p.dn} <span class="text-slate-300 mx-1">|</span> <strong>Mat:</strong> ${p.material}</span>
                            </div>
                        </div>
                        <button onclick="addToCart('${p.id}', 'peca')" ${inCart ? 'disabled' : ''} class="shrink-0 w-7 h-7 rounded flex items-center justify-center transition-colors ${inCart ? 'bg-green-100 text-green-600' : 'bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600'}">
                            <i data-lucide="${inCart ? 'check' : 'plus'}" class="w-3.5 h-3.5"></i>
                        </button>
                    `;
                    itemsContainer.appendChild(itemDiv);
                });
                container.appendChild(itemsContainer);
            }
        });

    } else {
        const filtered = kitsDatabase.filter(k => k.name.toLowerCase().includes(search));
        if(filtered.length === 0) return container.innerHTML = `<p class="text-sm text-slate-500 text-center py-4">Nenhum bloco encontrado.</p>`;

        filtered.forEach(k => {
            const div = document.createElement('div');
            div.className = `p-3 mb-2 rounded-lg border bg-white border-slate-200 hover:border-purple-300 flex justify-between items-center transition-all`;
            
            div.innerHTML = `
                <div class="flex-grow pr-4 flex items-center gap-3">
                    <div class="w-12 h-12 bg-purple-100 border border-purple-200 rounded flex items-center justify-center text-purple-600 shrink-0"><i data-lucide="image-off" class="w-5 h-5"></i></div>
                    <div class="min-w-0">
                        <div class="font-semibold text-sm text-slate-800 truncate">${k.name}</div>
                        <div class="text-xs text-purple-600 font-medium">${k.parts.length} peças neste bloco</div>
                    </div>
                </div>
                <button onclick="addToCart('${k.id}', 'bloco')" title="Inserir peças do bloco" class="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-purple-100 hover:bg-purple-600 hover:text-white text-purple-600">
                    <i data-lucide="layers" class="w-4 h-4"></i>
                </button>
            `;
            container.appendChild(div);
        });
    }
    lucide.createIcons();
}

function addToCart(id, type = 'peca') {
    if(type === 'peca') {
        const part = database.find(p => p.id === id);
        if (!part || exportCart.some(item => item.part.id === id)) return;
        exportCart.push({ part: part, qtde: 1, obs: "-" });
        if(listFilterMode === 'pecas') renderSelectionList(); 
    } else {
        const kit = kitsDatabase.find(k => k.id === id);
        if (!kit) return;
        
        let added = 0;
        kit.parts.forEach(kp => {
            const part = database.find(p => p.id === kp.id);
            if (part) {
                const existing = exportCart.find(item => item.part.id === part.id);
                if (existing) {
                    existing.qtde = parseFloat(existing.qtde) + parseFloat(kp.qtde);
                    existing.obs = existing.obs === "-" ? `Incluso no ${kit.name}` : existing.obs + `, + ${kit.name}`;
                } else {
                    exportCart.push({ part: part, qtde: kp.qtde, obs: `Bloco: ${kit.name}` });
                }
                added++;
            }
        });
        showToast(`${added} tipos de peças do bloco adicionadas!`, "success");
    }
    renderExportList();
}

function removeFromCart(id) {
    exportCart = exportCart.filter(item => item.part.id !== id);
    renderSelectionList();
    renderExportList();
}

function updateCartItem(id, field, value) {
    const item = exportCart.find(i => i.part.id === id);
    if(item) {
        item[field] = value;
    }
}

function renderExportList() {
    const container = document.getElementById('export-list');
    const counter = document.getElementById('export-count');
    
    counter.textContent = `${exportCart.length} item${exportCart.length !== 1 ? 's' : ''}`;

    if(exportCart.length === 0) {
        container.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-slate-400 opacity-70">
                <i data-lucide="inbox" class="w-16 h-16 mb-2"></i>
                <p>Sua lista está vazia.</p>
                <p class="text-sm mt-1">Clique no <i data-lucide="plus" class="w-3 h-3 inline"></i> na lista ao lado.</p>
            </div>`;
        lucide.createIcons();
        return;
    }

    container.innerHTML = '';
    exportCart.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = "bg-white p-3 mb-3 rounded-lg border border-slate-200 shadow-sm relative pr-10";
        
        div.innerHTML = `
            <div class="mb-2">
                <span class="text-blue-600 font-bold text-sm mr-2">${item.part.id}</span>
                <span class="font-semibold text-sm text-slate-800">${item.part.desc} - DN ${item.part.dn}</span>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div class="sm:col-span-1">
                    <label class="block text-xs text-slate-500 mb-1">Quantidade</label>
                    <div class="flex items-center">
                        <input type="number" min="1" step="1" value="${item.qtde}" onchange="updateCartItem('${item.part.id}', 'qtde', this.value)" class="w-full px-2 py-1.5 border border-slate-300 rounded-l focus:outline-none focus:border-blue-500 text-sm">
                        <span class="bg-slate-100 border border-l-0 border-slate-300 px-2 py-1.5 rounded-r text-xs font-semibold text-slate-600">${item.part.unid}</span>
                    </div>
                </div>
                <div class="sm:col-span-2">
                    <label class="block text-xs text-slate-500 mb-1">Observação</label>
                    <input type="text" value="${item.obs}" onchange="updateCartItem('${item.part.id}', 'obs', this.value)" class="w-full px-2 py-1.5 border border-slate-300 rounded focus:outline-none focus:border-blue-500 text-sm" placeholder="Opcional">
                </div>
            </div>

            <button onclick="removeFromCart('${item.part.id}')" class="absolute top-3 right-3 text-slate-300 hover:text-red-500 transition-colors">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>
        `;
        container.appendChild(div);
    });
    lucide.createIcons();
}

function exportToExcel() {
    if(exportCart.length === 0) {
        showToast("Adicione peças à lista antes de gerar o Excel.", "error");
        return;
    }

    const excelData = exportCart.map(item => ({
        "N°": item.part.id,
        "DESCRIÇÃO": item.part.desc,
        "DN": item.part.dn,
        "MATERIAL": item.part.material,
        "UNID.": item.part.unid,
        "QTDE": parseFloat(item.qtde),
        "OBS": item.obs === "-" ? "" : item.obs
    }));

    const ws = XLSX.utils.json_to_sheet(excelData);
    
    const wscols = [ {wch: 8}, {wch: 35}, {wch: 12}, {wch: 12}, {wch: 8}, {wch: 10}, {wch: 20} ];
    ws['!cols'] = wscols;

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Lista de Peças");
    
    const dateStr = new Date().toISOString().slice(0,10).replace(/-/g, "");
    XLSX.writeFile(wb, `Lista_Pecas_AutoCAD_${dateStr}.xlsx`);
    
    showToast("Arquivo Excel gerado com sucesso!", "success");
}

// === ABA: BANCO DE DADOS ===
function toggleDB(desc) {
    if(expandedDB.has(desc)) expandedDB.delete(desc);
    else expandedDB.add(desc);
    renderDatabase();
}

function renderDatabase() {
    const search = document.getElementById('dbSearchInput').value.toLowerCase();
    const tbody = document.getElementById('db-table-body');
    tbody.innerHTML = '';

    const filtered = database.filter(p => 
        p.id.toLowerCase().includes(search) || 
        p.desc.toLowerCase().includes(search) || 
        p.dn.toLowerCase().includes(search)
    );

    document.getElementById('db-total-count').textContent = `Total de ${filtered.length} peças`;

    if(filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="p-4 text-center text-slate-500 text-sm">Nenhuma peça encontrada.</td></tr>`;
        return;
    }

    const grouped = {};
    filtered.forEach(p => {
        if(!grouped[p.desc]) grouped[p.desc] = [];
        grouped[p.desc].push(p);
    });

    const isSearching = search.length > 0;

    const sortedDescs = Object.keys(grouped).sort((a, b) => {
        const numA = parseInt(grouped[a][0].id.split('.')[0]) || 0;
        const numB = parseInt(grouped[b][0].id.split('.')[0]) || 0;
        return numA - numB;
    });

    sortedDescs.forEach(desc => {
        const items = grouped[desc];
        const isExpanded = isSearching || expandedDB.has(desc);
        const primaryNum = items[0].id.split('.')[0];
        
        const trGroup = document.createElement('tr');
        trGroup.className = "bg-slate-100 hover:bg-slate-200 cursor-pointer border-b border-slate-200 transition-colors";
        trGroup.onclick = () => toggleDB(desc);
        trGroup.innerHTML = `
            <td colspan="6" class="p-3 pl-4">
                <div class="flex justify-between items-center">
                    <span class="font-bold text-slate-700 text-sm flex items-center gap-2">
                        <i data-lucide="folder" class="w-4 h-4 text-blue-500"></i>
                        <span class="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded">${primaryNum}</span>
                        ${desc}
                    </span>
                    <div class="flex items-center gap-3">
                        <span class="text-xs text-slate-500 font-medium bg-white px-2 py-0.5 rounded border border-slate-200">${items.length} itens</span>
                        <i data-lucide="${isExpanded ? 'chevron-down' : 'chevron-right'}" class="w-4 h-4 text-slate-500"></i>
                    </div>
                </div>
            </td>
        `;
        tbody.appendChild(trGroup);

        if(isExpanded) {
            items.sort((a, b) => {
                const secA = parseInt(a.id.split('.')[1]) || 0;
                const secB = parseInt(b.id.split('.')[1]) || 0;
                return secA - secB;
            }).forEach(p => {
                const trItem = document.createElement('tr');
                trItem.className = "hover:bg-slate-50 transition-colors group";
                trItem.innerHTML = `
                    <td class="p-3 pl-8 border-b border-slate-100 text-sm font-medium text-slate-600 whitespace-nowrap border-l-4 border-l-slate-200">${p.id}</td>
                    <td class="p-3 border-b border-slate-100 text-sm text-slate-400 italic">${p.desc}</td>
                    <td class="p-3 border-b border-slate-100 text-sm text-slate-600 whitespace-nowrap font-semibold">${p.dn}</td>
                    <td class="p-3 border-b border-slate-100 text-sm text-slate-600">${p.material}</td>
                    <td class="p-3 border-b border-slate-100 text-sm text-slate-600">${p.unid}</td>
                    <td class="p-3 pr-4 border-b border-slate-100 text-sm text-right">
                        <button onclick="deletePart('${p.id}')" class="text-slate-400 hover:text-red-500 transition-colors p-1 rounded hover:bg-red-50" title="Excluir">
                            <i data-lucide="trash-2" class="w-4 h-4"></i>
                        </button>
                    </td>
                `;
                tbody.appendChild(trItem);
            });
        }
    });
    
    lucide.createIcons();
}

function deletePart(id) {
    database = database.filter(p => p.id !== id);
    saveDatabase();
    
    exportCart = exportCart.filter(item => item.part.id !== id);
    
    renderDatabase();
    renderSelectionList();
    renderExportList();
    showToast("Peça removida com sucesso!");
}

// === ABA: CADASTRAR PEÇA ===
function showDescDropdown() {
    const dropdown = document.getElementById('desc-dropdown');
    dropdown.classList.remove('hidden');
    renderDescDropdownOptions(document.getElementById('input-desc').value);
}

function hideDescDropdown() {
    document.getElementById('desc-dropdown').classList.add('hidden');
}

function handleDescInput() {
    const val = document.getElementById('input-desc').value.toUpperCase();
    renderDescDropdownOptions(val);
    updateNumberSuggestions(val);
}

function renderDescDropdownOptions(filterText) {
    const dropdown = document.getElementById('desc-dropdown');
    dropdown.innerHTML = '';
    const filtered = uniqueDescriptions.filter(desc => desc.includes(filterText.toUpperCase()));
    
    if (filtered.length === 0) {
        dropdown.innerHTML = '<div class="p-2 text-sm text-slate-500">Nenhuma descrição existente encontrada. Um novo grupo será criado.</div>';
        return;
    }

    filtered.forEach(desc => {
        const div = document.createElement('div');
        div.className = 'p-2 hover:bg-blue-50 cursor-pointer text-sm text-slate-700 font-medium';
        div.textContent = desc;
        div.onclick = () => {
            document.getElementById('input-desc').value = desc;
            hideDescDropdown();
            updateNumberSuggestions(desc);
        };
        dropdown.appendChild(div);
    });
}

function updateNumberSuggestions(descText) {
    descText = descText.toUpperCase().trim();
    const existingItems = database.filter(p => p.desc === descText);
    
    const numPriInput = document.getElementById('input-num-pri');
    const numSecInput = document.getElementById('input-num-sec');

    if (existingItems.length > 0) {
        const primaryString = existingItems[0].id.split('.')[0];
        numPriInput.value = primaryString;
        
        document.getElementById('input-unid').value = existingItems[0].unid;
        document.getElementById('input-mat').value = existingItems[0].material;

        let maxSec = 0;
        database.filter(p => p.id.split('.')[0] === primaryString).forEach(p => {
            const parts = p.id.split('.');
            if (parts.length > 1) {
                const sec = parseInt(parts[1]);
                if (!isNaN(sec) && sec > maxSec) maxSec = sec;
            }
        });
        numSecInput.value = maxSec + 1;
        
        renderExistingRecords(existingItems);
    } else {
        let maxPri = 0;
        database.forEach(p => {
            const pri = parseInt(p.id.split('.')[0]);
            if (!isNaN(pri) && pri > maxPri) maxPri = pri;
        });
        numPriInput.value = maxPri + 1;
        numSecInput.value = 1;
        
        document.getElementById('existing-records-section').classList.add('hidden');
    }
}

function renderExistingRecords(items) {
    const section = document.getElementById('existing-records-section');
    const tbody = document.getElementById('existing-records-body');
    
    if (items.length === 0) {
        section.classList.add('hidden');
        return;
    }

    tbody.innerHTML = '';
    items.sort((a, b) => {
        const secA = parseInt(a.id.split('.')[1]) || 0;
        const secB = parseInt(b.id.split('.')[1]) || 0;
        return secA - secB;
    }).forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="p-2 border-b font-medium text-slate-700">${item.id}</td>
            <td class="p-2 border-b text-slate-600">${item.dn}</td>
            <td class="p-2 border-b text-slate-600">${item.material}</td>
            <td class="p-2 border-b text-slate-600">${item.unid}</td>
        `;
        tbody.appendChild(tr);
    });
    
    section.classList.remove('hidden');
}

function handleCadastrar(event) {
    event.preventDefault();
    const pri = document.getElementById('input-num-pri').value.trim();
    const sec = document.getElementById('input-num-sec').value.trim();
    const novoId = `${pri}.${sec}`;
    
    if(database.some(p => p.id === novoId)) {
        showToast(`Já existe uma peça cadastrada com o Nº ${novoId}!`, "error");
        return;
    }

    const descValue = document.getElementById('input-desc').value.trim().toUpperCase();

    const novaPeca = {
        id: novoId,
        desc: descValue,
        dn: document.getElementById('input-dn').value.trim().toUpperCase(),
        material: document.getElementById('input-mat').value.trim().toUpperCase(),
        unid: document.getElementById('input-unid').value.trim().toUpperCase()
    };

    database.push(novaPeca);
    saveDatabase();
    
    event.target.reset();
    document.getElementById('existing-records-section').classList.add('hidden');
    updateNumberSuggestions(''); 
    
    expandedGerar.add(descValue);
    expandedDB.add(descValue);
    
    renderDatabase();
    renderSelectionList();
    showToast("Peça cadastrada com sucesso!");
}

// === SISTEMA DE TOAST ===
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    
    const bgColor = type === 'success' ? 'bg-green-600' : type === 'error' ? 'bg-red-600' : 'bg-blue-600';
    const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'alert-circle' : 'info';
    
    toast.className = `toast ${bgColor} flex items-center gap-2 min-w-[250px] shadow-lg`;
    toast.innerHTML = `<i data-lucide="${icon}" class="w-5 h-5"></i> <span class="text-sm font-medium">${message}</span>`;
    
    container.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => toast.classList.add('show'), 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
