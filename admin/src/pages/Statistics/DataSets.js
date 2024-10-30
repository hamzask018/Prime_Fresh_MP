const chartData = {
    labels: data.map(item => item.label), // Extract labels
    datasets: [
      {
        label: 'Dataset 1',
        data: data.map(item => item.value), // Extract values
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)', // Border color
        borderWidth: 1,
      },
    ],
  };