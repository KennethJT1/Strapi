import type { Schema, Struct } from '@strapi/strapi';

export interface DeliverablesDeliverable extends Struct.ComponentSchema {
  collectionName: 'components_deliverables_deliverables';
  info: {
    displayName: 'Deliverable';
  };
  attributes: {
    deliverable_status: Schema.Attribute.Enumeration<
      ['Not Started', 'In Progress', 'Completed']
    >;
    due_date: Schema.Attribute.Date;
    name: Schema.Attribute.Text;
  };
}

export interface MetricsKpi extends Struct.ComponentSchema {
  collectionName: 'components_metrics_kpis';
  info: {
    displayName: 'kpi';
  };
  attributes: {
    current_value: Schema.Attribute.BigInteger;
    metric_name: Schema.Attribute.Text;
    target: Schema.Attribute.BigInteger;
  };
}

export interface TaskCommitmentTaskCommitment extends Struct.ComponentSchema {
  collectionName: 'components_task_commitment_task_commitments';
  info: {
    displayName: 'task-commitment';
  };
  attributes: {
    actualDate: Schema.Attribute.Date;
    actualHours: Schema.Attribute.Integer;
    chargeable: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    evidence: Schema.Attribute.RichText;
    percentComplete: Schema.Attribute.Integer;
    planned: Schema.Attribute.String;
    plannedHours: Schema.Attribute.Integer;
    priority: Schema.Attribute.Enumeration<['High', 'Medium', 'Low']>;
    projectCode: Schema.Attribute.String;
    role: Schema.Attribute.String;
    sprint: Schema.Attribute.Integer;
    targetDate: Schema.Attribute.Date;
    task_status: Schema.Attribute.Enumeration<
      [
        'Not Started',
        'In Progress',
        'Due Today',
        'Ready for QA',
        'Blocker',
        'Late',
        'Pass QA',
      ]
    >;
    taskCategory: Schema.Attribute.Text;
    taskId: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['DoD', 'Readiness', 'Availability', 'Task', 'Not_work']
    >;
    userStory: Schema.Attribute.Text;
  };
}

export interface UpdatesQuarterlyUpdate extends Struct.ComponentSchema {
  collectionName: 'components_updates_quarterly_updates';
  info: {
    displayName: 'quarterly_update';
  };
  attributes: {
    challenges: Schema.Attribute.RichText;
    next_quarter_plan: Schema.Attribute.RichText;
    progress_made: Schema.Attribute.RichText;
    quarter: Schema.Attribute.Enumeration<['Q1', 'Q2', 'Q3', 'Q4']>;
    update_date: Schema.Attribute.Date;
    update_summary: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'deliverables.deliverable': DeliverablesDeliverable;
      'metrics.kpi': MetricsKpi;
      'task-commitment.task-commitment': TaskCommitmentTaskCommitment;
      'updates.quarterly-update': UpdatesQuarterlyUpdate;
    }
  }
}
