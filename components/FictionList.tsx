'use client';

import { useState } from 'react';
import FictionCard from './FictionCard';
import type { Fiction } from '@/lib/fiction';

interface FictionListProps {
  fiction: Fiction[];
}

export default function FictionList({ fiction }: FictionListProps) {
  const [filter, setFilter] = useState<'all' | Fiction['type']>('all');

  const filteredFiction =
    filter === 'all' ? fiction : fiction.filter((item) => item.type === filter);

  const typeCounts = {
    all: fiction.length,
    'short-story': fiction.filter((f) => f.type === 'short-story').length,
    novel: fiction.filter((f) => f.type === 'novel').length,
    novella: fiction.filter((f) => f.type === 'novella').length,
    poetry: fiction.filter((f) => f.type === 'poetry').length,
    essay: fiction.filter((f) => f.type === 'essay').length,
  };

  const filters = [
    { key: 'all' as const, label: 'All Works' },
    { key: 'short-story' as const, label: 'Short Stories' },
    { key: 'novel' as const, label: 'Novels' },
    { key: 'novella' as const, label: 'Novellas' },
    { key: 'poetry' as const, label: 'Poetry' },
    { key: 'essay' as const, label: 'Essays' },
  ];

  return (
    <>
      {/* Filter Tabs */}
      {fiction.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === key
                  ? 'bg-accent text-white shadow-md shadow-accent/25'
                  : 'bg-card border border-card-border text-muted hover:border-accent hover:text-accent'
              }`}
            >
              {label}
              <span className={`ml-2 ${filter === key ? 'text-white/70' : 'text-muted/50'}`}>
                {typeCounts[key]}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Fiction Grid */}
      {filteredFiction.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center">
            <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <h2 className="font-display text-2xl font-semibold mb-2">
            {filter === 'all' ? 'No works yet' : 'No works in this category'}
          </h2>
          <p className="text-muted">
            {filter === 'all' 
              ? 'Creative works will be added soon. Check back later!' 
              : 'No works found in this category.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate">
          {filteredFiction.map((fiction) => (
            <FictionCard key={fiction.id} fiction={fiction} />
          ))}
        </div>
      )}
    </>
  );
}


