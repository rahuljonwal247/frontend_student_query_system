let mockQueries = [
    {
      id: '1',
      title: 'Transcript Request',
      description: 'A student has requested their transcript.',
      status: 'Pending',
      resolverNote: '',
    },
    {
      id: '2',
      title: 'Exam Registration Issue',
      description: 'A student is facing issues with exam registration.',
      status: 'In Progress',
      resolverNote: '',
    },
  ];
  
  export default function handler(req, res) {
    // Handle GET request to fetch assigned queries
    if (req.method === 'GET') {
      // Return the mock data
      res.status(200).json(mockQueries);
    }
  
    // Handle PUT request to update query status, internal notes, and resolution summary
    if (req.method === 'PUT') {
      const { id } = req.query;
      const { status, internalNote, resolutionSummary } = req.body;
  
      // Find the query by id
      const queryIndex = mockQueries.findIndex((query) => query.id === id);
      if (queryIndex === -1) {
        return res.status(404).json({ message: 'Query not found' });
      }
  
      // Update the query with the new status, internal note, and resolution summary
      mockQueries[queryIndex] = {
        ...mockQueries[queryIndex],
        status: status || mockQueries[queryIndex].status,
        resolverNote: internalNote || mockQueries[queryIndex].resolverNote,
        resolutionSummary: resolutionSummary || mockQueries[queryIndex].resolutionSummary,
      };
  
      // Respond with the updated query
      res.status(200).json(mockQueries[queryIndex]);
    }
  }
  