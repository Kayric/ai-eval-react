import { 
  BookOpen, 
  Books, 
  Question, 
  Robot, 
  TreeStructure, 
  Database, 
  ChartBar, 
  Factory, 
  Gear, 
  Wrench, 
  CheckCircle, 
  Link 
} from "@phosphor-icons/react";

export const chapters = [
  { id: 'cover', title: 'Start Here', icon: BookOpen, path: '/' },
  { id: 'definition', title: 'What is Evaluation?', icon: Books, path: '/definition' },
  { id: 'intro', title: 'Traditional vs AI', icon: Question, path: '/intro' },
  { id: 'modelVsProduct', title: 'Model vs Product', icon: Robot, path: '/model-vs-product' },
  { id: 'framework', title: 'The Framework', icon: TreeStructure, path: '/framework' },
  { id: 'datasets', title: 'Datasets', icon: Database, path: '/datasets' },
  { id: 'metrics', title: 'Metrics', icon: ChartBar, path: '/metrics' },
  { id: 'production', title: 'Production', icon: Factory, path: '/production' },
  { id: 'process', title: 'The Process', icon: Gear, path: '/process' },
  { id: 'tools', title: 'Tools', icon: Wrench, path: '/tools' },
  { id: 'wrapup', title: 'Wrap Up', icon: CheckCircle, path: '/wrapup' },
  { id: 'resources', title: 'Resources', icon: Link, path: '/resources' },
];
