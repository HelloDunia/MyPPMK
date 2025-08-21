import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// Environment Error Component - Shows when .env is missing
const EnvErrorPage = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      color: '#e2e8f0',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '900px',
        background: 'rgba(26, 26, 46, 0.9)',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        overflow: 'hidden',
        border: '1px solid rgba(255, 215, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '96vh' // Limit height to viewport
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(90deg, #ffd700 0%, #ffb700 100%)',
          padding: '25px',
          textAlign: 'center',
          flexShrink: 0 // Prevent header from shrinking
        }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: '700', color: '#1a1a2e', marginBottom: '10px' }}>
            Environment Configuration Required
          </h1>
          <p style={{ color: '#1a1a2e', fontSize: '1.1rem', fontWeight: '500' }}>
            Community Map Application - Missing Essential Configuration
          </p>
        </div>
        
        {/* Scrollable Content Area */}
        <div style={{ 
          padding: '30px',
          overflowY: 'auto', // Enable vertical scrolling
          flex: 1, // Take available space
          maxHeight: 'calc(96vh - 180px)' // Calculate max height
        }}>
          {/* Error Card */}
          <div style={{
            background: 'rgba(30, 30, 50, 0.6)',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '25px',
            borderLeft: '4px solid #ffd700'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <span style={{ fontSize: '24px', color: '#ffd700', marginRight: '10px' }}>⚠️</span>
              <h2 style={{ fontSize: '1.5rem', color: '#f8fafc' }}>Missing Environment Variables File</h2>
            </div>
            <p style={{ lineHeight: '1.6', marginBottom: '15px', color: '#cbd5e1' }}>
              The application cannot start because it's missing the required environment configuration file (<code style={{ background: '#0f172a', padding: '2px 6px', borderRadius: '4px', color: '#ffd700' }}>.env</code>). This file contains essential settings that are not included in version control for security reasons.
            </p>
          </div>
          
          {/* Important Note */}
          <div style={{
            background: 'rgba(255, 215, 0, 0.1)',
            borderRadius: '8px',
            padding: '16px',
            margin: '20px 0',
            borderLeft: '4px solid #ffd700'
          }}>
            <h4 style={{ color: '#ffd700', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px' }}>🔒</span>
              Important Security Notice
            </h4>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
              The <code style={{ background: '#0f172a', padding: '2px 6px', borderRadius: '4px', color: '#ffd700' }}>.env</code> file contains sensitive information like API keys and database credentials. Never commit this file to version control or share it publicly.
            </p>
          </div>
          
          {/* Solution Steps */}
          <div style={{ margin: '30px 0' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#ffd700', marginBottom: '15px', paddingBottom: '8px', borderBottom: '1px solid rgba(255, 215, 0, 0.3)' }}>
              How to Resolve This Issue
            </h3>
            
            <div style={{ listStyleType: 'none' }}>
              {/* Step 1 */}
              <div style={{ padding: '15px', background: 'rgba(30, 30, 50, 0.4)', marginBottom: '10px', borderRadius: '8px', display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ background: '#ffd700', color: '#1a1a2e', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', marginRight: '15px', flexShrink: '0' }}>1</div>
                <div style={{ flex: '1' }}>
                  <h4 style={{ marginBottom: '5px', color: '#f8fafc' }}>Contact the repository administrator</h4>
                  <p style={{ color: '#cbd5e1', lineHeight: '1.5' }}>
                    Ask the repo admin for the API keys and environment variables needed to run this application.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div style={{ padding: '15px', background: 'rgba(30, 30, 50, 0.4)', marginBottom: '10px', borderRadius: '8px', display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ background: '#ffd700', color: '#1a1a2e', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', marginRight: '15px', flexShrink: '0' }}>2</div>
                <div style={{ flex: '1' }}>
                  <h4 style={{ marginBottom: '5px', color: '#f8fafc' }}>Create a new file named <code style={{ background: '#0f172a', padding: '2px 6px', borderRadius: '4px', color: '#ffd700' }}>.env</code></h4>
                  <p style={{ color: '#cbd5e1', lineHeight: '1.5' }}>In the root directory of your project, create a new file and name it <code style={{ background: '#0f172a', padding: '2px 6px', borderRadius: '4px', color: '#ffd700' }}>.env</code></p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div style={{ padding: '15px', background: 'rgba(30, 30, 50, 0.4)', marginBottom: '10px', borderRadius: '8px', display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ background: '#ffd700', color: '#1a1a2e', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', marginRight: '15px', flexShrink: '0' }}>3</div>
                <div style={{ flex: '1' }}>
                  <h4 style={{ marginBottom: '5px', color: '#f8fafc' }}>Add the required environment variables</h4>
                  <p style={{ color: '#cbd5e1', lineHeight: '1.5' }}>Copy the structure below into your <code style={{ background: '#0f172a', padding: '2px 6px', borderRadius: '4px', color: '#ffd700' }}>.env</code> file and fill in the appropriate values:</p>
                  <div style={{ background: '#0f172a', borderRadius: '8px', padding: '16px', margin: '15px 0', overflowX: 'auto', fontFamily: "'Courier New', monospace", border: '1px solid rgba(255, 215, 0, 0.2)' }}>
                    <code style={{ color: '#e2e8f0', lineHeight: '1.5', display: 'block', whiteSpace: 'pre' }}>
{`# Supabase Configuration
REACT_APP_SUPABASE_URL=your_supabase_project_url_here
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key_here
REACT_APP_SUPABASE_STORAGE_URL=your_supabase_storage_url_here

# Add other environment variables as needed`}
                    </code>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div style={{ padding: '15px', background: 'rgba(30, 30, 50, 0.4)', marginBottom: '10px', borderRadius: '8px', display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ background: '#ffd700', color: '#1a1a2e', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', marginRight: '15px', flexShrink: '0' }}>4</div>
                <div style={{ flex: '1' }}>
                  <h4 style={{ marginBottom: '5px', color: '#f8fafc' }}>Restart your development server</h4>
                  <p style={{ color: '#cbd5e1', lineHeight: '1.5' }}>After creating the <code style={{ background: '#0f172a', padding: '2px 6px', borderRadius: '4px', color: '#ffd700' }}>.env</code> file, restart your application for the changes to take effect.</p>
                  <div style={{ background: '#0f172a', borderRadius: '8px', padding: '16px', margin: '15px 0', overflowX: 'auto', fontFamily: "'Courier New', monospace", border: '1px solid rgba(255, 215, 0, 0.2)' }}>
                    <code style={{ color: '#e2e8f0', lineHeight: '1.5', display: 'block', whiteSpace: 'pre' }}>
{`# npm start

# Or npm run bas`}
                    </code>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div style={{ padding: '15px', background: 'rgba(30, 30, 50, 0.4)', marginBottom: '10px', borderRadius: '8px', display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ background: '#ffd700', color: '#1a1a2e', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', marginRight: '15px', flexShrink: '0' }}>5</div>
                <div style={{ flex: '1' }}>
                  <h4 style={{ marginBottom: '5px', color: '#f8fafc' }}>Get your Supabase credentials (if needed)</h4>
                  <p style={{ color: '#cbd5e1', lineHeight: '1.5' }}>If you need to set up your own Supabase instance, you can find these values in your project settings:</p>
                  <ul style={{ color: '#cbd5e1', paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Go to <a href="https://app.supabase.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffd700' }}>app.supabase.com</a></li>
                    <li>Select your project</li>
                    <li>Navigate to Settings → API</li>
                    <li>Find your Project URL and anon/public key</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer - Always visible at the bottom */}
        <div style={{ 
          textAlign: 'center', 
          padding: '20px', 
          color: '#94a3b8', 
          fontSize: '0.9rem', 
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          flexShrink: 0 // Prevent footer from shrinking
        }}>
          <p>Need help? Check the project documentation or contact the development team.</p>
          <p>© 2025 HelloDunia</p>
        </div>
      </div>
    </div>
  );
};

// Check if environment variables are missing
const isEnvMissing = !process.env.REACT_APP_SUPABASE_URL || 
                     !process.env.REACT_APP_SUPABASE_ANON_KEY;

// Debug info
console.log('Environment check:');
console.log('REACT_APP_SUPABASE_URL:', process.env.REACT_APP_SUPABASE_URL ? '✅ Present' : '❌ Missing');
console.log('REACT_APP_SUPABASE_ANON_KEY:', process.env.REACT_APP_SUPABASE_ANON_KEY ? '✅ Present' : '❌ Missing');

const rootElement = document.getElementById("root");

// Always show the error page if .env is missing
if (isEnvMissing) {
  ReactDOM.render(
    <StrictMode>
      <EnvErrorPage />
    </StrictMode>,
    rootElement
  );
} else {
  // Import and render the actual app only if .env is present
  import('./App.jsx')
    .then(({ default: App }) => {
      ReactDOM.render(
        <StrictMode>
          <App />
        </StrictMode>,
        rootElement
      );
    })
    .catch(error => {
      console.error('Error loading App component:', error);
      ReactDOM.render(
        <div style={{ padding: '20px', fontFamily: 'Arial', background: '#1a1a2e', color: 'white', minHeight: '100vh' }}>
          <h2>Error Loading Application</h2>
          <p>Check the console for details.</p>
        </div>,
        rootElement
      );
    });
}