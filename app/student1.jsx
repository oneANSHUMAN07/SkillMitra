/* SkillMitra — Dashboard, Skill Analysis, Skill Gaps, Roadmap, Resources */

const s1Css = `
.dash-hero{display:grid;grid-template-columns:1.35fr 1fr;gap:20px}
.goal-card{display:grid;grid-template-columns:auto 1fr;gap:28px;align-items:center;padding:26px}
.next-card{padding:26px;display:flex;flex-direction:column;background:var(--ink);color:#fff;border-color:var(--ink)}
.next-card h3{color:#fff}
.skill-row{display:grid;grid-template-columns:repeat(5,1fr);gap:14px}
.skill-card{padding:16px 16px 14px}
.dash-2{display:grid;grid-template-columns:1.35fr 1fr;gap:20px}
.dash-3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.act{display:flex;gap:12px;padding:12px 0;border-top:1px solid var(--line-2)}
.act:first-child{border-top:0;padding-top:0}
.act .icon-tile{width:32px;height:32px;border-radius:8px}
.act .icon-tile svg{width:15px;height:15px}
.gap-row{display:grid;grid-template-columns:96px 1fr 1fr 28px;align-items:center;gap:12px;padding:9px 0;border-top:1px solid var(--line-2);font-size:13.5px}
.an-src{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}
.an-src .card{padding:16px}
.an-grid{display:grid;grid-template-columns:1fr 1.3fr;gap:20px}
.an-cols{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.an-col{border-radius:12px;padding:18px;border:1px solid}
.cmp-row{display:grid;grid-template-columns:110px 1fr 120px;gap:16px;align-items:center;padding:14px 0;border-top:1px solid var(--line-2)}
.cmp-track{position:relative;height:10px;background:var(--line-2);border-radius:99px}
.cmp-track i{position:absolute;left:0;top:0;bottom:0;border-radius:99px;transition:width 1s cubic-bezier(.2,.7,.2,1)}
.cmp-track b{position:absolute;top:-5px;width:2px;height:20px;background:var(--ink);border-radius:2px}
.gaps-wrap{display:grid;grid-template-columns:1fr 340px;gap:20px;align-items:start}
.rm-wrap{display:grid;grid-template-columns:1fr 320px;gap:24px;align-items:start}
.rm{position:relative}
.rm-step{display:grid;grid-template-columns:56px 1fr;gap:0;position:relative}
.rm-step .rail{position:relative;display:flex;justify-content:center}
.rm-step .rail::after{content:"";position:absolute;top:44px;bottom:-4px;width:2px;background:var(--line)}
.rm-step:last-child .rail::after{display:none}
.rm-step.done .rail::after{background:var(--green)}
.rm-step.cur .rail::after{background:linear-gradient(var(--blue) 50%,var(--line) 50%)}
.rm-node{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;font-weight:700;font-size:13px;background:#fff;border:2px solid var(--line);color:var(--ink-3);position:relative;z-index:1;font-family:var(--mono)}
.rm-step.cur .rm-node{border-color:var(--blue);color:var(--blue);box-shadow:0 0 0 5px var(--blue-50)}
.rm-step.done .rm-node{background:var(--green);border-color:var(--green);color:#fff}
.rm-card{margin-bottom:16px;padding:20px 22px}
.rm-step.cur .rm-card{border-color:var(--blue-200);box-shadow:var(--sh-2)}
.rm-step.locked .rm-card{background:#FAFBFD}
.rm-meta{display:grid;grid-template-columns:repeat(4,auto);gap:22px;margin-top:16px;padding-top:14px;border-top:1px solid var(--line-2);justify-content:start}
.rm-meta div{font-size:13px}
.rm-meta .eyebrow{font-size:10px;margin-bottom:2px}
.res-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.res-card{padding:20px;display:flex;flex-direction:column}
.res-wrap{display:grid;grid-template-columns:1fr 320px;gap:20px;align-items:start}
.tabs{display:flex;gap:4px;border-bottom:1px solid var(--line);margin-bottom:20px;overflow-x:auto}
.tabs button{height:40px;padding:0 14px;border:0;background:none;font-weight:600;font-size:13.5px;color:var(--ink-3);border-bottom:2px solid transparent;margin-bottom:-1px;white-space:nowrap}
.tabs button.on{color:var(--ink);border-bottom-color:var(--blue)}
.tabs button:hover{color:var(--ink)}
@media (max-width:1200px){.skill-row{grid-template-columns:repeat(3,1fr)}.an-src{grid-template-columns:repeat(3,1fr)}}
@media (max-width:1024px){
  .dash-hero,.dash-2,.an-grid,.gaps-wrap,.rm-wrap,.res-wrap{grid-template-columns:1fr}
  .dash-3{grid-template-columns:1fr 1fr}
}
@media (max-width:720px){
  .goal-card{grid-template-columns:1fr;justify-items:start;gap:18px;padding:20px}
  .skill-row{grid-template-columns:1fr 1fr}
  .dash-3,.res-grid,.an-cols{grid-template-columns:1fr}
  .an-src{grid-template-columns:1fr 1fr}
  .cmp-row{grid-template-columns:80px 1fr;}
  .cmp-row > :last-child{grid-column:1/-1}
  .rm-step{grid-template-columns:44px 1fr}
  .rm-node{width:34px;height:34px;font-size:12px}
  .rm-meta{grid-template-columns:1fr 1fr;gap:12px}
  .gap-row{grid-template-columns:80px 1fr 1fr 24px}
}
`;
function S1Style(){ return <style>{s1Css}</style>; }

function greeting(){ const h = new Date().getHours(); return h<12?'Good morning':h<17?'Good afternoon':'Good evening'; }

/* ================= DASHBOARD ================= */
function Dashboard(){
  const { state, role, gaps, readiness, learningProgress, steps, current, next, nextAction, levels } = useStore();
  const skills = [...gaps].sort((a,b)=>({strong:0,developing:1,missing:2}[a.status]-({strong:0,developing:1,missing:2}[b.status])));
  const recs = [
    { t:'SQL Fundamentals', s:'Course · 6 hrs', i:'database', to:'/learning/sql', tag:'Top priority', tone:'amber', p:steps[0].progress },
    { t:'Statistics Essentials', s:'Course · 5 hrs', i:'sigma', to:'/learning/statistics', tag:'Up next', tone:'blue', p:0 },
    { t:'Power BI for Beginners', s:'Course · 5 hrs', i:'bar-chart-3', to:'/learning/powerbi', tag:'Missing skill', tone:'red', p:0 },
  ];
  return (<>
    <S1Style/>
    <div className="page-head">
      <div><h1>{greeting()}, {state.profile.name} 👋</h1><p>Here’s your learning progress for today.</p></div>
      <div className="row"><A to="/analysis" className="btn btn-secondary"><Icon name="scan-search"/>Skill Analysis</A></div>
    </div>

    <div className="dash-hero">
      <div className="card goal-card">
        <Ring value={readiness} size={148} stroke={11} color="var(--green)" label="Career readiness" sub="Career ready"/>
        <div>
          <div className="eyebrow">Target career</div>
          <div className="row" style={{ gap:10, margin:'4px 0 6px' }}><h2 style={{ fontSize:28, fontWeight:800 }}>{role.title}</h2><span className="chip chip-green"><Icon name="trending-up"/>+{readiness-state.readinessBefore} since July</span></div>
          <p className="muted" style={{ fontSize:14 }}>You match {gaps.filter(g=>g.status==='strong').length} of {gaps.length} core skills. Closing SQL and Statistics will make the biggest difference.</p>
          <div className="row" style={{ marginTop:18, flexWrap:'wrap' }}>
            <A to="/career-readiness" className="btn btn-secondary btn-sm">Career Readiness<Icon name="arrow-right"/></A>
            <A to="/industry-skills" className="link">Role requirements</A>
          </div>
        </div>
      </div>
      <div className="card next-card">
        <div className="eyebrow" style={{ color:'rgba(255,255,255,.55)' }}>Next recommended action</div>
        <h3 style={{ fontSize:22, fontWeight:800, margin:'10px 0 6px' }}>{nextAction.title}</h3>
        <p style={{ color:'rgba(255,255,255,.65)', fontSize:14 }}>{nextAction.sub}</p>
        {nextAction.to==='/learning/sql' && <div style={{ margin:'18px 0 0' }}>
          <div className="between" style={{ fontSize:12.5, marginBottom:6, color:'rgba(255,255,255,.7)' }}><span>Module progress</span><b className="num" style={{ color:'#fff' }}>{steps[0].progress}%</b></div>
          <div className="bar" style={{ background:'rgba(255,255,255,.12)' }}><i style={{ width:steps[0].progress+'%', background:'#6F8BFF' }}/></div>
        </div>}
        <div style={{ flex:1, minHeight:18 }}/>
        <div className="row" style={{ flexWrap:'wrap' }}>
          <A to={nextAction.to} className="btn" style={{ background:'#fff', color:'var(--ink)' }}>{nextAction.cta}<Icon name="arrow-right"/></A>
          {nextAction.to==='/learning/sql' && <A to="/assessment" className="btn" style={{ color:'#fff', border:'1px solid rgba(255,255,255,.2)' }}>Take assessment</A>}
        </div>
      </div>
    </div>

    <div className="card-head" style={{ marginTop:32 }}><h2 className="card-title" style={{ fontSize:17 }}>Skill Overview</h2><A to="/analysis" className="link">Full analysis<Icon name="arrow-right"/></A></div>
    <div className="skill-row">
      {skills.map(g=>(
        <A key={g.skill} to={g.skill==='SQL'?'/learning/sql':g.skill==='Statistics'?'/learning/statistics':g.skill==='Power BI'?'/learning/powerbi':'/skill-gaps'} className="card card-hover skill-card">
          <div className="between"><b style={{ fontSize:15 }}>{g.skill}</b><StatusDot status={g.status}/></div>
          <div style={{ margin:'14px 0 10px' }}><LevelPips level={g.cur} target={g.level} tone={g.status==='strong'?'green':g.status==='developing'?'amber':'blue'}/></div>
          <div className="between"><span style={{ fontSize:12.5, fontWeight:600, color:{strong:'var(--green)',developing:'var(--amber)',missing:'var(--red)'}[g.status] }}>{STATUS[g.status].label}</span><span className="faint" style={{ fontSize:12 }}>{D.LEVELS[g.cur]}</span></div>
        </A>
      ))}
    </div>

    <div className="dash-2" style={{ marginTop:20 }}>
      <div className="card card-pad">
        <div className="card-head"><div><h3 className="card-title">Learning Progress</h3><div className="faint" style={{ fontSize:13, marginTop:2 }}>Current roadmap · {role.title}</div></div><b className="num" style={{ fontSize:26, letterSpacing:'-.03em' }}>{learningProgress}%</b></div>
        <Bar value={learningProgress}/>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:4, marginTop:10 }}>
          {steps.map(s=><div key={s.id} style={{ fontSize:11, color:s.status==='Completed'?'var(--green)':s.status==='In Progress'||s.status==='Up Next'?'var(--blue)':'var(--ink-3)', fontWeight:600, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{s.n} {s.title.split(' ')[0]}</div>)}
        </div>
        <div className="divider"/>
        <div className="grid" style={{ gridTemplateColumns:'1fr 1fr', gap:14 }}>
          <div style={{ padding:14, borderRadius:10, background:'var(--blue-50)', border:'1px solid var(--blue-100)' }}>
            <div className="eyebrow" style={{ color:'var(--blue)' }}>Current stage</div>
            <div style={{ fontWeight:700, marginTop:4 }}>{current.title}</div>
            <div className="faint" style={{ fontSize:12.5 }}>{current.time}</div>
          </div>
          <div style={{ padding:14, borderRadius:10, background:'var(--bg)', border:'1px solid var(--line)' }}>
            <div className="eyebrow">Next</div>
            <div style={{ fontWeight:700, marginTop:4 }}>{next.title.replace(' for Data Analysis','')}</div>
            <div className="faint" style={{ fontSize:12.5 }}>{next.time}</div>
          </div>
        </div>
        <div style={{ marginTop:16 }}><A to="/learning" className="link">Open roadmap<Icon name="arrow-right"/></A></div>
      </div>
      <div className="card card-pad">
        <div className="card-head"><h3 className="card-title">Skill Gap Snapshot</h3><span className="faint" style={{ fontSize:12 }}>You vs. {role.title}</span></div>
        <div className="gap-row" style={{ borderTop:0, paddingTop:0 }}><span className="eyebrow" style={{fontSize:10}}>Skill</span><span className="eyebrow" style={{fontSize:10}}>Current</span><span className="eyebrow" style={{fontSize:10}}>Required</span><span/></div>
        {gaps.map(g=>(
          <div key={g.skill} className="gap-row">
            <b style={{ fontWeight:600 }}>{g.skill}</b>
            <LevelPips level={g.cur} tone={g.status==='strong'?'green':'amber'}/>
            <LevelPips level={g.level} tone="blue"/>
            <StatusDot status={g.status} size={22}/>
          </div>
        ))}
        <A to="/skill-gaps" className="btn btn-primary btn-block" style={{ marginTop:16 }}>View Skill Gaps<Icon name="arrow-right"/></A>
      </div>
    </div>

    <div className="dash-2" style={{ marginTop:20 }}>
      <div>
        <div className="card-head"><h2 className="card-title" style={{ fontSize:17 }}>Recommended for You</h2><A to="/learning" className="link">All resources<Icon name="arrow-right"/></A></div>
        <div className="dash-3">
          {recs.map(r=>(
            <A key={r.t} to={r.to} className="card card-hover card-pad" style={{ display:'flex', flexDirection:'column', padding:18 }}>
              <div className="between"><div className="icon-tile"><Icon name={r.i}/></div><span className={`chip chip-${r.tone}`}>{r.tag}</span></div>
              <b style={{ fontSize:15, marginTop:16 }}>{r.t}</b>
              <span className="faint" style={{ fontSize:12.5, marginTop:2 }}>{r.s}</span>
              <div style={{ flex:1, minHeight:16 }}/>
              {r.p>0 ? <><Bar value={r.p} size="sm"/><span className="faint" style={{ fontSize:12, marginTop:6 }}>{r.p}% complete</span></> : <span className="link" style={{ fontSize:13 }}>Start<Icon name="arrow-right"/></span>}
            </A>
          ))}
        </div>
      </div>
      <div className="card card-pad">
        <div className="card-head"><h3 className="card-title">Recent Activity</h3></div>
        {(state.sqlLevel>=2 ? [{icon:'badge-check',tone:'green',t:'SQL validated at Intermediate',s:`Scored ${state.assessment?.score ?? 8}/10 on SQL Fundamentals`,when:'Just now'}, ...D.activity] : D.activity).slice(0,4).map((a,i)=>(
          <div key={i} className="act">
            <div className={`icon-tile ${a.tone}`}><Icon name={a.icon}/></div>
            <div style={{ flex:1, minWidth:0 }}><div style={{ fontWeight:600, fontSize:13.5 }}>{a.t}</div><div className="faint" style={{ fontSize:12.5 }}>{a.s}</div></div>
            <span className="faint" style={{ fontSize:12, whiteSpace:'nowrap' }}>{a.when}</span>
          </div>
        ))}
      </div>
    </div>
  </>);
}

/* ================= SKILL ANALYSIS ================= */
function Analysis({ query }){
  const { state, role, gaps, levels } = useStore();
  const shouldRun = query.run === '1';
  const [phase, setPhase] = useState(shouldRun ? 0 : 4);
  useEffect(()=>{ if (!shouldRun) return; const ts=[1,2,3,4].map((p,i)=>setTimeout(()=>setPhase(p), 650*(i+1))); return ()=>ts.forEach(clearTimeout); },[]);
  const sources = [
    { i:'file-text', t:'Resume', s:state.profile.resume ? 'Parsed · 6 skills' : 'Not uploaded' },
    { i:'school', t:'Academic Profile', s:`${state.profile.degree} · Sem ${state.profile.semester}` },
    { i:'list-checks', t:'Self-Declared Skills', s:`${state.profile.skills.length} skills` },
    { i:'clipboard-check', t:'Assessment Results', s:state.sqlLevel>=2?'Python, Excel, SQL':'Python, Excel' },
    { i:'flag', t:'Career Goal', s:role.title },
  ];
  const groups = [
    { k:'strong', t:'Strong', d:'At or above the level your role needs.', bg:'var(--green-50)', bd:'var(--green-100)', c:'var(--green)' },
    { k:'developing', t:'Developing', d:'Started, but below the required level.', bg:'var(--amber-50)', bd:'var(--amber-100)', c:'var(--amber)' },
    { k:'missing', t:'Missing', d:'Not yet in your profile.', bg:'var(--red-50)', bd:'var(--red-100)', c:'var(--red)' },
  ];
  // Spec: Developing = SQL; Missing = Power BI, Statistics (Statistics level is beginner but unverified → treated missing in analysis)
  const groupOf = g => g.skill==='Statistics' && state.sqlLevel<2 ? 'missing' : g.status;
  return (<>
    <S1Style/>
    <PageHead crumbs={[{label:'Dashboard',to:'/dashboard'},{label:'Skill Analysis'}]} title="Your Skill Analysis"
      sub={`We combined five sources to understand where you stand against the ${role.title} role.`}
      right={<><button className="btn btn-secondary" onClick={()=>go('/analysis?run=1&t='+Date.now())}><Icon name="refresh-cw"/>Re-run analysis</button><A to="/skill-gaps" className="btn btn-primary">View Skill Gaps<Icon name="arrow-right"/></A></>}/>

    <div className="eyebrow" style={{ marginBottom:10 }}>Input sources</div>
    <div className="an-src">
      {sources.map((s,i)=>{ const done = phase>=1 && (phase>1 || i<3) || phase>=2; return (
        <div key={s.t} className="card" style={{ transition:'border-color .3s', borderColor: done?'var(--line)':'var(--line)' }}>
          <div className="between"><div className={`icon-tile ${done?'':'gray'}`} style={{ width:34, height:34 }}><Icon name={s.i}/></div>
            {done ? <Icon name="check-circle-2" size={17} style={{ color:'var(--green)' }}/> : <Icon name="loader-2" size={17} className="spin" style={{ color:'var(--ink-3)' }}/>}</div>
          <b style={{ display:'block', fontSize:14, marginTop:12 }}>{s.t}</b>
          <span className="faint" style={{ fontSize:12.5 }}>{s.s}</span>
        </div>);})}
    </div>

    {phase<4 ? (
      <div className="card card-pad" style={{ marginTop:20 }} aria-live="polite">
        <div className="row" style={{ marginBottom:18 }}><Icon name="loader-2" className="spin" style={{ color:'var(--blue)' }}/><b>{['Reading your profile…','Extracting skills from resume…','Comparing with Data Analyst requirements…','Scoring skill levels…'][phase]}</b></div>
        {[0,1,2].map(i=><div key={i} className="skel" style={{ height:44, marginBottom:10, width:`${90-i*14}%` }}/>)}
      </div>
    ) : (
      <div className="reveal">
        <div className="an-grid" style={{ marginTop:20 }}>
          <div className="card card-pad">
            <div className="eyebrow">Current skills</div>
            <div className="row" style={{ flexWrap:'wrap', gap:8, margin:'12px 0 22px' }}>
              {state.profile.skills.map(s=><span key={s} className="tag" style={{ height:32, fontSize:14, padding:'0 14px', background:'#fff' }}>{s}</span>)}
            </div>
            <div className="eyebrow">Target role</div>
            <div className="row" style={{ marginTop:12 }}>
              <div className="icon-tile"><Icon name={role.icon}/></div>
              <div><b style={{ fontSize:18 }}>{role.title}</b><div className="faint" style={{ fontSize:12.5 }}>{role.required.length} core skills · curated requirements</div></div>
            </div>
            <div className="divider"/>
            <div className="eyebrow" style={{ marginBottom:12 }}>Match</div>
            <div className="row" style={{ gap:16 }}>
              <Ring value={Math.round(gaps.reduce((a,g)=>a+Math.min(g.cur,g.level)/g.level,0)/gaps.length*100)} size={86} stroke={8} sub="match"/>
              <p className="muted" style={{ fontSize:13.5 }}>Your foundation in <b>Python</b> and <b>Excel</b> is strong. The fastest path forward is SQL — you’ve started, and it’s required at an advanced level.</p>
            </div>
          </div>
          <div className="card card-pad">
            <div className="card-head"><h3 className="card-title">Analysis result</h3><span className="chip chip-blue"><Icon name="sparkles"/>AI-assessed</span></div>
            <div className="an-cols">
              {groups.map(gr=>{ const items = gaps.filter(g=>groupOf(g)===gr.k); return (
                <div key={gr.k} className="an-col" style={{ background:gr.bg, borderColor:gr.bd }}>
                  <div className="row" style={{ gap:8, color:gr.c, fontWeight:700 }}><Icon name={STATUS[gr.k].icon} size={16} strokeWidth={2.6}/>{gr.t}</div>
                  <p style={{ fontSize:12.5, color:'var(--ink-2)', margin:'4px 0 14px' }}>{gr.d}</p>
                  {items.length ? items.map(g=><div key={g.skill} style={{ background:'#fff', borderRadius:8, padding:'9px 12px', fontWeight:700, fontSize:14, marginBottom:6, border:'1px solid rgba(0,0,0,.04)' }}>{g.skill}</div>)
                    : <div className="faint" style={{ fontSize:13 }}>None</div>}
                </div>);})}
            </div>
          </div>
        </div>

        <div className="card card-pad" style={{ marginTop:20 }}>
          <div className="card-head"><div><h3 className="card-title">Skill level vs. role requirement</h3><div className="faint" style={{ fontSize:13 }}>Bar shows your level · marker shows what {role.title} roles expect</div></div>
            <div className="row hide-sm" style={{ gap:14, fontSize:12 }}><span className="row" style={{gap:6}}><i style={{width:10,height:10,borderRadius:3,background:'var(--blue)'}}/>Your level</span><span className="row" style={{gap:6}}><i style={{width:2,height:12,background:'var(--ink)'}}/>Required</span></div></div>
          {gaps.map(g=><CompareRow key={g.skill} g={g}/>)}
          <div className="row" style={{ justifyContent:'flex-end', marginTop:16, gap:4, fontSize:11, fontFamily:'var(--mono)' }} aria-hidden="true">
            <span className="faint" style={{ marginRight:'auto' }}>SCALE</span>{D.LEVELS.map(l=><span key={l} className="faint" style={{ width:84, textAlign:'center' }}>{l}</span>)}
          </div>
        </div>
      </div>
    )}
  </>);
}
function CompareRow({ g }){
  const m = useMounted(100);
  const c = { strong:'var(--green)', developing:'#D9921F', missing:'var(--red)' }[g.status];
  return (
    <div className="cmp-row">
      <b style={{ fontSize:14 }}>{g.skill}</b>
      <div className="cmp-track"><i style={{ width:(m?Math.max(g.cur/3*100,2):0)+'%', background:c }}/><b style={{ left:`calc(${g.level/3*100}% - 1px)` }}/></div>
      <span style={{ fontSize:13 }}><b>{D.LEVELS[g.cur]}</b><span className="faint"> / {D.LEVELS[g.level]}</span></span>
    </div>
  );
}

/* ================= SKILL GAPS ================= */
function SkillGaps(){
  const { role, gaps, sqlValidated } = useStore();
  const gapChip = g => g.gap==='None' ? <span className="chip chip-green">None</span> : g.gap==='High' ? <span className="chip chip-red">High</span> : <span className="chip chip-amber">Medium</span>;
  const actTo = s => ({ SQL:'/learning/sql', Statistics:'/learning/statistics', 'Power BI':'/learning/powerbi' })[s] || '/learning';
  const priority = sqlValidated ? gaps.find(g=>g.skill==='Power BI') : gaps.find(g=>g.skill==='SQL');
  const counts = { none:gaps.filter(g=>g.gap==='None').length, med:gaps.filter(g=>g.gap==='Medium').length, high:gaps.filter(g=>g.gap==='High').length };
  return (<>
    <S1Style/>
    <PageHead crumbs={[{label:'Dashboard',to:'/dashboard'},{label:'Skill Gaps'}]} title="Your Skill Gaps"
      sub="Here’s what stands between your current skills and your target career."
      right={<span className="chip chip-blue" style={{ height:32, padding:'0 12px', fontSize:13 }}><Icon name={role.icon}/>Target: {role.title}</span>}/>
    <div className="gaps-wrap">
      <div>
        <div className="grid" style={{ gridTemplateColumns:'repeat(3,1fr)', gap:12, marginBottom:16 }}>
          {[['No gap',counts.none,'green'],['Medium gap',counts.med,'amber'],['High gap',counts.high,'red']].map(([l,n,t])=>(
            <div key={l} className="card" style={{ padding:'14px 16px' }}><div className="faint" style={{ fontSize:12.5, fontWeight:600 }}>{l}</div><div className="row" style={{ gap:8, marginTop:2 }}><b className="num" style={{ fontSize:24 }}>{n}</b><span className={`chip chip-${t}`} style={{ height:8, width:8, padding:0, borderRadius:99 }}/></div></div>
          ))}
        </div>
        <div className="card" style={{ overflow:'hidden' }}>
          <table className="tbl tbl-resp">
            <thead><tr><th>Skill</th><th>Current Level</th><th>Required Level</th><th>Gap</th><th style={{ textAlign:'right' }}>Action</th></tr></thead>
            <tbody>{gaps.map(g=>(
              <tr key={g.skill} className={g.skill===priority?.skill?'hl':''}>
                <td className="full" data-l="Skill"><div className="row" style={{ gap:10 }}><StatusDot status={g.status}/><div><b>{g.skill}</b><div className="faint" style={{ fontSize:12 }}>{g.weight}</div></div></div></td>
                <td data-l="Current"><div style={{ fontWeight:600, fontSize:13.5 }}>{D.LEVELS[g.cur]}</div><LevelPips level={g.cur} tone={g.status==='strong'?'green':'amber'}/></td>
                <td data-l="Required"><div style={{ fontWeight:600, fontSize:13.5 }}>{D.LEVELS[g.level]}</div><LevelPips level={g.level}/></td>
                <td data-l="Gap">{gapChip(g)}</td>
                <td data-l="Action" style={{ textAlign:'right' }}>
                  {g.action==='Maintain' ? <A to="/assessment" className="btn btn-ghost btn-sm">Maintain</A>
                    : <A to={actTo(g.skill)} className={`btn btn-sm ${g.skill===priority?.skill?'btn-primary':'btn-secondary'}`}>{g.action}<Icon name="arrow-right"/></A>}
                </td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <p className="faint" style={{ fontSize:12.5, marginTop:12 }}><Icon name="info" size={13}/> Levels combine your resume, self-declared skills and validated assessments. Required levels come from curated {role.title} requirements.</p>
      </div>
      <div>
        <div className="card card-pad" style={{ borderColor:'var(--amber-100)' }}>
          <div className="row" style={{ gap:8 }}><span className="chip chip-amber"><Icon name="flag"/>Top Priority</span></div>
          <h2 style={{ fontSize:32, fontWeight:800, margin:'14px 0 6px' }}>{priority.skill}</h2>
          <p className="muted" style={{ fontSize:14 }}>{priority.skill==='SQL' ? 'SQL is a core requirement for your selected career path.' : 'Power BI is the remaining high gap — it’s new to you and listed in most analyst roles.'}</p>
          <div className="divider"/>
          <div className="between" style={{ fontSize:13, marginBottom:8 }}><span className="muted">Current</span><b>{D.LEVELS[priority.cur]}</b></div>
          <div className="between" style={{ fontSize:13, marginBottom:8 }}><span className="muted">Required</span><b>{D.LEVELS[priority.level]}</b></div>
          <div className="between" style={{ fontSize:13 }}><span className="muted">Estimated time</span><b>{priority.skill==='SQL'?'3 weeks':'2 weeks'}</b></div>
          <A to={actTo(priority.skill)} className="btn btn-primary btn-block btn-lg" style={{ marginTop:20 }}>Start Learning {priority.skill}<Icon name="arrow-right"/></A>
        </div>
        <div className="card card-pad" style={{ marginTop:16 }}>
          <b style={{ fontSize:14 }}>Why it matters</b>
          <p className="muted" style={{ fontSize:13.5, marginTop:6 }}>{role.required.find(r=>r.skill===priority.skill).why}</p>
          <button className="link" style={{ marginTop:12 }} onClick={()=>window.dispatchEvent(new CustomEvent('sm:ask'))}>Ask SkillMitra to explain<Icon name="arrow-right"/></button>
        </div>
      </div>
    </div>
  </>);
}

/* ================= ROADMAP ================= */
function Roadmap(){
  const { role, steps, learningProgress, readiness } = useStore();
  const chip = s => ({ 'Completed':<span className="chip chip-green"><Icon name="check"/>Completed</span>, 'In Progress':<span className="chip chip-blue"><span className="dot"/>In Progress</span>,
    'Up Next':<span className="chip chip-blue">Up Next</span>, 'Not Started':<span className="chip chip-gray">Not Started</span>, 'Locked':<span className="chip chip-gray"><Icon name="lock"/>Locked</span> })[s];
  const linkFor = s => s.id==='project' ? '/projects/student-performance-analytics' : s.id==='final' ? null : '/learning/'+s.id;
  return (<>
    <S1Style/>
    <PageHead crumbs={[{label:'Dashboard',to:'/dashboard'},{label:'My Learning'}]} title="Your Personalized Learning Path"
      sub={`Five steps, ordered by impact on your ${role.title} readiness. Each step unlocks the next.`}/>
    <div className="rm-wrap">
      <div className="rm">
        {steps.map((s,i)=>{
          const cls = s.status==='Completed'?'done':(s.status==='In Progress'||s.status==='Up Next')?'cur':s.status==='Locked'?'locked':'';
          const to = linkFor(s);
          return (
          <div key={s.id} className={`rm-step ${cls} reveal`} style={{ animationDelay:i*80+'ms' }}>
            <div className="rail"><div className="rm-node">{s.status==='Completed'?<Icon name="check" size={18} strokeWidth={3}/>:s.status==='Locked'?<Icon name="lock" size={15}/>:s.n}</div></div>
            <div className="card rm-card">
              <div className="between" style={{ alignItems:'flex-start', flexWrap:'wrap' }}>
                <div style={{ flex:1, minWidth:200 }}>
                  <div className="eyebrow">Step {s.n}</div>
                  <h3 style={{ fontSize:19, fontWeight:700, margin:'4px 0 4px' }}>{s.title}</h3>
                  <p className="muted" style={{ fontSize:13.5 }}>{s.desc}</p>
                </div>
                {chip(s.status)}
              </div>
              {(s.status==='In Progress' || s.progress>0) && <div style={{ marginTop:14 }}><div className="between" style={{ fontSize:12.5, marginBottom:6 }}><span className="muted">Progress</span><b className="num">{s.progress}%</b></div><Bar value={s.progress} tone={s.status==='Completed'?'green':''}/></div>}
              <div className="rm-meta">
                <div><div className="eyebrow">Estimated time</div><b>{s.time}</b></div>
                <div><div className="eyebrow">Skill gained</div><b>{s.gained}</b></div>
                <div><div className="eyebrow">Resources</div><b>{s.resources ? `${s.resources} items` : 'Assessment'}</b></div>
                <div style={{ alignSelf:'end' }}>
                  {to ? <A to={to} className={`btn btn-sm ${cls==='cur'?'btn-primary':'btn-secondary'}`}>{s.status==='In Progress'?'Continue':s.status==='Completed'?'Review':'View'}<Icon name="arrow-right"/></A>
                    : <span className="faint" style={{ fontSize:12.5 }}>Unlocks after step 04</span>}
                </div>
              </div>
            </div>
          </div>);})}
      </div>
      <div style={{ position:'sticky', top:84 }}>
        <div className="card card-pad">
          <div className="eyebrow">Career</div>
          <div className="row" style={{ marginTop:8 }}><div className="icon-tile"><Icon name={role.icon}/></div><b style={{ fontSize:18 }}>{role.title}</b></div>
          <div className="divider"/>
          <div className="between" style={{ fontSize:13, marginBottom:6 }}><span className="muted">Path complete</span><b className="num">{learningProgress}%</b></div>
          <Bar value={learningProgress}/>
          <div className="between" style={{ fontSize:13, margin:'16px 0 6px' }}><span className="muted">Career readiness</span><b className="num">{readiness}%</b></div>
          <Bar value={readiness} tone="green"/>
          <div className="divider"/>
          <div className="between" style={{ fontSize:13 }}><span className="muted">Estimated completion</span><b>Dec 2026</b></div>
          <div className="between" style={{ fontSize:13, marginTop:8 }}><span className="muted">Weekly pace</span><b>6 hrs / week</b></div>
          <A to="/career-readiness" className="btn btn-secondary btn-block" style={{ marginTop:18 }}>Career Readiness</A>
        </div>
        <div className="card card-pad" style={{ marginTop:16 }}>
          <b style={{ fontSize:14 }}>Recommended project</b>
          <p className="muted" style={{ fontSize:13, margin:'4px 0 12px' }}>Student Performance Analytics · SQL, Excel</p>
          <A to="/projects/student-performance-analytics" className="link">View Project<Icon name="arrow-right"/></A>
        </div>
      </div>
    </div>
  </>);
}

/* ================= RESOURCES ================= */
function Resources({ topic }){
  const { state, update, notify, sqlValidated } = useStore();
  const res = D.resources[topic];
  const [filter, setFilter] = useState('All');
  const [open, setOpen] = useState(null);
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [youtubeStatus, setYoutubeStatus] = useState(topic === 'sql' ? 'loading' : 'idle');
  useEffect(() => {
    if (topic !== 'sql') return;
    let cancelled = false;
    setYoutubeStatus('loading');
    fetch('/.netlify/functions/youtube-search?q=' + encodeURIComponent('SQL tutorial for beginners data analysis JOINs'))
      .then(async response => {
        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data.error || 'Could not load YouTube videos.');
        return data;
      })
      .then(data => { if (!cancelled) { setYoutubeVideos(Array.isArray(data.videos) ? data.videos : []); setYoutubeStatus('ready'); } })
      .catch(() => { if (!cancelled) setYoutubeStatus('error'); });
    return () => { cancelled = true; };
  }, [topic]);
  if (!res) return <NotFound/>;
  // (hooks above are unconditional)
  const step = D.roadmap.find(r=>r.id===topic);
  const rp = state.resourceProgress;
  const prog = i => rp[i.id] ?? i.progress;
  const staticItems = topic === 'sql' ? res.items.filter(i => i.type !== 'Video') : res.items;
  const liveVideoItems = topic === 'sql' ? youtubeVideos.map((video, index) => ({
    id: 'youtube-' + video.id, type: 'Video', icon: 'play-circle', title: video.title, provider: video.channelTitle,
    difficulty: 'Beginner', duration: video.publishedAt ? 'Published ' + new Date(video.publishedAt).toLocaleDateString() : 'YouTube lecture',
    progress: rp['youtube-' + video.id] ?? 0, lessons: [], url: video.url, thumbnail: video.thumbnail
  })) : [];
  const allItems = [...staticItems, ...liveVideoItems];
  const items = allItems.filter(i=>filter==='All'||i.type===filter);
  const overall = Math.round(allItems.reduce((a,i)=>a+prog(i),0)/Math.max(1,allItems.length));
  const start = i => {
    const p = Math.min(100, prog(i) + (prog(i)>=100?0: prog(i)>=70?30:25));
    update({ resourceProgress:{ ...rp, [i.id]: p } });
    notify(p>=100 ? `Completed: ${i.title}` : `Progress saved · ${p}%`);
  };
  return (<>
    <S1Style/>
    <PageHead crumbs={[{label:'My Learning',to:'/learning'},{label:res.title}]} title={res.title}
      sub={`${step.time} · ${step.gained}`}
      right={topic==='sql' && <A to="/assessment" className="btn btn-secondary"><Icon name="clipboard-check"/>Take SQL Assessment</A>}/>
    <div className="res-wrap">
      <div>
        <div className="card card-pad" style={{ background:'var(--blue-50)', borderColor:'var(--blue-100)', marginBottom:20 }}>
          <div className="row" style={{ alignItems:'flex-start' }}>
            <div className="icon-tile" style={{ background:'#fff' }}><Icon name="lightbulb"/></div>
            <div><b>Why this is recommended</b><p className="muted" style={{ fontSize:14, marginTop:4 }}>{res.why}</p></div>
          </div>
        </div>
        <div className="tabs" role="tablist">
          {['All','Course','Video','Article','Practice'].map(t=><button key={t} role="tab" aria-selected={filter===t} className={filter===t?'on':''} onClick={()=>setFilter(t)}>{t}{t!=='All' && <span className="faint" style={{ marginLeft:6 }}>{t==='Video'&&topic==='sql' ? (youtubeStatus==='ready'?youtubeVideos.length:'live') : res.items.filter(i=>i.type===t).length}</span>}</button>)}
        </div>
        {topic==='sql' && filter==='Video' && youtubeStatus==='loading' && <div className="card card-pad" style={{ marginBottom:16 }}><span className="row"><Icon name="loader-circle"/> Loading real YouTube lectures…</span></div>}
        {topic==='sql' && youtubeStatus==='error' && (filter==='All'||filter==='Video') && <div className="card card-pad" style={{ marginBottom:16, borderColor:'var(--amber-300, #f5c56b)' }}><b>Live YouTube results are unavailable right now.</b><p className="muted" style={{ fontSize:13, marginTop:5 }}>Check that the Netlify function is deployed and YOUTUBE_API_KEY is set in your Netlify environment variables.</p></div>}
        {items.length===0 ? (
          <div className="card card-pad" style={{ textAlign:'center', padding:40 }}><div className="icon-tile gray" style={{ margin:'0 auto 12px' }}><Icon name="inbox"/></div><b>{topic==='sql' && filter==='Video' && youtubeStatus==='loading' ? 'Finding real YouTube lectures…' : `No ${filter.toLowerCase()} resources for this module yet`}</b><p className="faint" style={{ fontSize:13, marginTop:4 }}>Live video results are fetched from YouTube when the backend is configured.</p></div>
        ) : (
        <div className="res-grid">
          {items.map(i=>{ const p = prog(i); return (
            <div key={i.id} className="card card-hover res-card">
              <div className="between"><span className="row" style={{ gap:8, fontSize:12.5, fontWeight:700, color:'var(--ink-2)' }}><div className="icon-tile" style={{ width:30, height:30 }}><Icon name={i.icon}/></div>{i.type}</span>{diffChip(i.difficulty)}</div>
              {i.thumbnail && <a href={i.url} target="_blank" rel="noreferrer" aria-label={'Watch ' + i.title} style={{ display:'block', marginTop:12 }}><img src={i.thumbnail} alt="" loading="lazy" style={{ width:'100%', aspectRatio:'16/9', objectFit:'cover', borderRadius:10 }}/></a>}
              <b style={{ fontSize:16, margin:'14px 0 4px', lineHeight:1.35 }}>{i.title}</b>
              <span className="faint" style={{ fontSize:12.5 }}>{i.provider} · {i.duration}</span>
              {open===i.id && i.lessons.length>0 && <ul style={{ margin:'12px 0 0', padding:0, listStyle:'none' }}>{i.lessons.map((l,k)=>(
                <li key={l} className="row" style={{ fontSize:13, gap:8, padding:'5px 0', color: k < Math.round(i.lessons.length*p/100) ? 'var(--ink)' : 'var(--ink-3)' }}>
                  {k < Math.round(i.lessons.length*p/100) ? <Icon name="check-circle-2" size={15} style={{ color:'var(--green)' }}/> : <Icon name="circle" size={15}/>}{l}</li>))}</ul>}
              <div style={{ flex:1, minHeight:16 }}/>
              <div className="between" style={{ fontSize:12.5, margin:'14px 0 6px' }}><span className="muted">Progress</span><b className="num">{p}%</b></div>
              <Bar value={p} size="sm" tone={p>=100?'green':''}/>
              <div className="row" style={{ marginTop:14 }}>
                {i.url ? <a className="btn btn-primary btn-sm" href={i.url} target="_blank" rel="noreferrer"><Icon name="play"/>Watch on YouTube</a> : <button className={`btn btn-sm ${p>=100?'btn-secondary':'btn-primary'}`} onClick={()=>start(i)}>{p>=100?<><Icon name="check"/>Completed</>:p>0?'Continue':'Start Learning'}</button>}
                {!i.url && i.lessons.length>0 && <button className="btn btn-ghost btn-sm" onClick={()=>setOpen(open===i.id?null:i.id)} aria-expanded={open===i.id}>{open===i.id?'Hide':'Syllabus'}</button>}
              </div>
            </div>);})}
        </div>)}
      </div>
      <div style={{ position:'sticky', top:84 }}>
        <div className="card card-pad">
          <div className="row" style={{ gap:16 }}><Ring value={topic==='sql'&&sqlValidated?100:overall} size={78} stroke={7}/><div><b>Module progress</b><div className="faint" style={{ fontSize:12.5 }}>{allItems.filter(i=>prog(i)>=100).length} of {allItems.length} resources done</div></div></div>
          <div className="divider"/>
          <div className="eyebrow" style={{ marginBottom:8 }}>You’ll be able to</div>
          <p style={{ fontSize:13.5 }}>{res.outcome}</p>
          <div className="eyebrow" style={{ margin:'16px 0 8px' }}>Topics</div>
          {step.topics.map(t=><div key={t} className="row" style={{ fontSize:13.5, gap:8, padding:'4px 0' }}><Icon name="dot" size={16} className="faint"/>{t}</div>)}
          {topic==='sql' && <>
            <div className="divider"/>
            {sqlValidated
              ? <div className="row" style={{ color:'var(--green)', fontWeight:700, fontSize:14 }}><Icon name="badge-check"/>Validated · Intermediate</div>
              : <><p className="muted" style={{ fontSize:13, marginBottom:12 }}>Ready to prove it? A 10-question check validates your level.</p><A to="/assessment" className="btn btn-primary btn-block">Start Assessment</A></>}
          </>}
        </div>
      </div>
    </div>
  </>);
}

function NotFound(){
  return <div className="card card-pad" style={{ textAlign:'center', padding:56, maxWidth:520, margin:'40px auto' }}>
    <div className="icon-tile gray" style={{ margin:'0 auto 14px' }}><Icon name="compass"/></div>
    <h2 style={{ fontSize:22 }}>We couldn’t find that page</h2>
    <p className="muted" style={{ margin:'6px 0 20px' }}>It may have moved. Head back to your dashboard to continue.</p>
    <A to="/dashboard" className="btn btn-primary">Go to Dashboard</A>
  </div>;
}

Object.assign(window, { Dashboard, Analysis, SkillGaps, Roadmap, Resources, NotFound, S1Style });
