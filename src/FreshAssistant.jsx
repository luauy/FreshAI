import React from 'react';
import { 
  Github, 
  Cpu, 
  ShieldCheck, 
  Copy, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import dictionary from '../lib/dictionary';

const FreshAssistant = ({ isWritingEnabled, status }) => {
  return (
    <div className="assistant-card">
      {/* Header with AI Icon */}
      <div className="header">
        <Cpu size={24} className="icon-green" />
        <h2>{dictionary.botIdentity.name}</h2>
      </div>

      {/* Status Area */}
      <div className="status-zone">
        {isWritingEnabled ? (
          <div className="status-item active">
            <CheckCircle2 size={16} />
            <span>{dictionary.responses.writing}</span>
          </div>
        ) : (
          <div className="status-item warning">
            <AlertCircle size={16} />
            <span>{dictionary.responses.manual}</span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="actions">
        {isWritingEnabled ? (
          <button className="btn-primary">
            <Github size={18} />
            {dictionary.ui.buttonShip}
          </button>
        ) : (
          <button className="btn-secondary">
            <Copy size={18} />
            {dictionary.ui.buttonCopy}
          </button>
        )}
      </div>

      {/* Trust Footer */}
      <div className="footer">
        <ShieldCheck size={14} />
        <span>OAuth Secure</span>
        <ExternalLink size={14} className="link-icon" />
      </div>
    </div>
  );
};

export default FreshAssistant;
