import { useState, useEffect } from 'react';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { RoleSelectionPage } from './components/RoleSelectionPage';
import { OnboardingPage } from './components/OnboardingPage';
import { HomePageNew } from './components/HomePageNew';
import { GigDetailPage } from './components/GigDetailPage';
import { UserProfilePage } from './components/UserProfilePage';
import { CategoryPage } from './components/CategoryPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('login');
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [tempUser, setTempUser] = useState<any>(null);
  const [selectedGigId, setSelectedGigId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  useEffect(() => {
    const user = sessionStorage.getItem('currentUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
      setCurrentPage('home');
    }
  }, []);

  const handleLogin = (user: any) => {
    setCurrentUser(user);
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    setCurrentPage('home');
  };

  const handleSignup = (user: any) => {
    setTempUser(user);
    setCurrentPage('role-selection');
  };

  const handleRoleSelection = (role: 'buyer' | 'seller') => {
    const updatedUser = { ...tempUser, role };
    setTempUser(updatedUser);
    
    // Update user in localStorage
    const usersData = localStorage.getItem('users');
    const users = usersData ? JSON.parse(usersData) : [];
    const userIndex = users.findIndex((u: any) => u.id === updatedUser.id);
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      localStorage.setItem('users', JSON.stringify(users));
    }
    
    setCurrentPage('onboarding');
  };

  const handleOnboardingComplete = () => {
    setCurrentUser(tempUser);
    sessionStorage.setItem('currentUser', JSON.stringify(tempUser));
    setTempUser(null);
    setCurrentPage('home');
  };

  const handleOnboardingSkip = () => {
    setCurrentUser(tempUser);
    sessionStorage.setItem('currentUser', JSON.stringify(tempUser));
    setTempUser(null);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem('currentUser');
    setCurrentPage('login');
  };

  const navigateTo = (page: string, params?: any) => {
    setCurrentPage(page);
    if (params?.gigId) setSelectedGigId(params.gigId);
    if (params?.category) setSelectedCategory(params.category);
    if (params?.userId) setSelectedUserId(params.userId);
  };

  return (
    <div className="min-h-screen bg-white">
      {currentPage === 'login' && (
        <LoginPage 
          onLogin={handleLogin}
          onNavigateToSignup={() => setCurrentPage('signup')}
        />
      )}
      {currentPage === 'signup' && (
        <SignupPage 
          onSignup={handleSignup}
          onNavigateToLogin={() => setCurrentPage('login')}
        />
      )}
      {currentPage === 'role-selection' && tempUser && (
        <RoleSelectionPage 
          userName={tempUser.name}
          onComplete={handleRoleSelection}
        />
      )}
      {currentPage === 'onboarding' && tempUser && (
        <OnboardingPage 
          role={tempUser.role}
          onComplete={handleOnboardingComplete}
          onSkip={handleOnboardingSkip}
        />
      )}
      {currentPage === 'home' && currentUser && (
        <HomePageNew 
          currentUser={currentUser}
          onLogout={handleLogout}
          onNavigateTo={navigateTo}
        />
      )}
      {currentPage === 'gig-detail' && selectedGigId && (
        <GigDetailPage 
          gigId={selectedGigId}
          currentUser={currentUser}
          onNavigateTo={navigateTo}
          onLogout={handleLogout}
        />
      )}
      {currentPage === 'category' && selectedCategory && (
        <CategoryPage 
          category={selectedCategory}
          currentUser={currentUser}
          onNavigateTo={navigateTo}
          onLogout={handleLogout}
        />
      )}
      {currentPage === 'profile' && selectedUserId && (
        <UserProfilePage 
          userId={selectedUserId}
          currentUser={currentUser}
          onNavigateTo={navigateTo}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}
