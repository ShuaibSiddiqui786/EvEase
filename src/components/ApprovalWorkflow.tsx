import React from 'react';
import { CheckCircle, XCircle, Clock, AlertCircle } from 'lucide-react';
import { Event } from '../types';

interface ApprovalWorkflowProps {
  event: Event;
}

const approvalSteps = [
  { id: 'club', title: 'Club Approval', description: 'Approved by club coordinator' },
  { id: 'venue', title: 'Venue Booking', description: 'Venue availability confirmed' },
  { id: 'faculty', title: 'Faculty Approval', description: 'Approved by faculty advisor' },
  { id: 'admin', title: 'Admin Approval', description: 'Final approval from admin' },
];

export function ApprovalWorkflow({ event }: ApprovalWorkflowProps) {
  const getStepStatus = (stepId: string) => {
    // This would come from your actual event data
    const statuses: Record<string, 'approved' | 'rejected' | 'pending'> = {
      club: 'approved',
      venue: 'approved',
      faculty: 'pending',
      admin: 'pending',
    };
    return statuses[stepId];
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'rejected':
        return <XCircle className="w-6 h-6 text-red-500" />;
      case 'pending':
        return <Clock className="w-6 h-6 text-yellow-500" />;
      default:
        return <AlertCircle className="w-6 h-6 text-gray-400" />;
    }
  };

  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {approvalSteps.map((step, stepIdx) => {
          const status = getStepStatus(step.id);
          return (
            <li key={step.id}>
              <div className="relative pb-8">
                {stepIdx !== approvalSteps.length - 1 ? (
                  <span
                    className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>{getStatusIcon(status)}</div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{step.title}</p>
                      <p className="mt-1 text-sm text-gray-500">{step.description}</p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      {status === 'pending' && (
                        <button className="text-indigo-600 hover:text-indigo-900">
                          Review
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}