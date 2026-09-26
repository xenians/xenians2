/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ContentProvider } from './context/ContentContext';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CompanyPage } from './pages/CompanyPage';
import { BusinessPage } from './pages/BusinessPage';
import { TrackRecordPage } from './pages/TrackRecordPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { motion } from 'motion/react';

// Scroll handler for hash navigation and top
const ScrollHandler = () => {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);
  return null;
};

// Page Transition wrapper
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <ContentProvider>
      <Router>
        <ScrollHandler />
        <Routes>
          {/* Main App Routes */}
          <Route path="/" element={
            <Layout>
               <PageTransition><HomePage /></PageTransition>
            </Layout>
          } />
          
          <Route path="/company" element={
            <Layout>
               <PageTransition><CompanyPage /></PageTransition>
            </Layout>
          } />

          {/* Business Routes with 5 Divisions */}
          <Route path="/business" element={
            <Layout>
               <PageTransition><BusinessPage /></PageTransition>
            </Layout>
          } />
          <Route path="/business/:tab" element={
            <Layout>
               <PageTransition><BusinessPage /></PageTransition>
            </Layout>
          } />

          {/* Legacy Aliases & Sub-routes */}
          <Route path="/advisory" element={<Navigate to="/business/mna" replace />} />
          <Route path="/advisory/sell-side" element={<Navigate to="/business/mna" replace />} />
          <Route path="/advisory/buy-side" element={<Navigate to="/business/mna" replace />} />
          <Route path="/valuation" element={<Navigate to="/business/mna" replace />} />
          <Route path="/pm" element={<Navigate to="/business/development" replace />} />
          <Route path="/operations" element={<Navigate to="/business/operation" replace />} />

          {/* Projects / Track Record */}
          <Route path="/projects" element={
            <Layout>
               <PageTransition><TrackRecordPage /></PageTransition>
            </Layout>
          } />
          <Route path="/track-record" element={<Navigate to="/projects" replace />} />

          {/* Insights */}
          <Route path="/insights" element={
            <Layout>
               <PageTransition><InsightsPage /></PageTransition>
            </Layout>
          } />

          {/* Contact */}
          <Route path="/contact" element={
            <Layout>
               <PageTransition><ContactPage /></PageTransition>
            </Layout>
          } />
          
          {/* Privacy Policy */}
          <Route path="/privacy" element={
            <Layout>
               <PageTransition><PrivacyPage /></PageTransition>
            </Layout>
          } />

          {/* Admin Route */}
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ContentProvider>
  );
}
