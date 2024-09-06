import { cn } from '@/lib/utils';
import React from 'react'

interface TabButtonsProps {
    divisions: any[];
    activeTabId: string;
    onTabChange: (id: string) => void;
}

function TabButtons({
    divisions,
    activeTabId,
    onTabChange
}: TabButtonsProps) {
  return (
    <div className="flex gap-8 flex-wrap w-full">
        {
            divisions.map((div) => {
                return (
                    <button
                        className={
                            cn(
                                `text-lg font-semibold text-primary opacity-40`,
                                activeTabId === div.id ? 'opacity-100' : ''
                            )}
                        onClick={() => onTabChange(div.id)}
                    >
                        {div.name}
                    </button>
                )
            })
        }
    </div>
  )
}

export default TabButtons