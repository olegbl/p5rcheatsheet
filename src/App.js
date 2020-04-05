import React from 'react';
import TabView from './TabView';
import TabBar from './TabBar';
import Answers from './Answers';
import Confidants from './Confidants';
import Personas from './Personas';

// TODO:
// * negotiation answers (e.g. https://github.com/joyce-chen/persona5-negotiation)

const TABS = [
  {
    id: 'quizzes',
    label: 'Quizzes',
    render: () => <Answers />,
  },
  {
    id: 'confidants',
    label: 'Confidants',
    render: () => <Confidants />,
  },
  {
    id: 'personas',
    label: 'Personas',
    render: () => <Personas />,
  },
];

export default function App() {
  const [tab, setTab] = React.useState('confidants');

  return (
    <React.Fragment>
      <TabView tab={tab} tabs={TABS} onChangeTab={setTab} />
      <TabBar tab={tab} tabs={TABS} onChangeTab={setTab} />
    </React.Fragment>
  );
}
